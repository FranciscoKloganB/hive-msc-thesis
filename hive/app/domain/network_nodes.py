"""This module contains domain specific classes that represent network nodes
responsible for the storage of file blocks. These could be reliable servers
or P2P nodes."""
from __future__ import annotations

import math
import sys
import traceback
from typing import Union, Dict, List

import numpy as np
import pandas as pd

import domain.cluster_groups as cg
import domain.master_servers as ms

from domain.helpers.enums import Status, HttpCodes
from domain.helpers.data_classes import FileBlockData
from utils import crypto


class Worker:
    """Represents a network node that executes a Swarm Guidance algorithm.

    Workers work in one or more hives (:py:class:`~domain.cluster_groups.Hive`) to try
    to ensure the durability of files belonging to the distributed backup
    system. Their route file block replicas to other workers at every epoch
    time according to the routing table of the file that block belongs to,
    i.e., according to the column vector of the transition matrix that is
    generated by (:py:meth:`~domain.cluster_groups.Hive.new_transition_matrix`). If
    every worker in the Hive shares their blocks with other members by
    following their respective vector then eventually, the whole Hive will
    reach the desired steady state distribution of file block replicas
    (:py:attr:`~domain.cluster_groups.Hive.v_`).

    Attributes:
        id:
            A unique identifier of the worker instance on the network.
            Currently identifiers are generated by
            :py:func:`~scripts.pyscripts.label_generator.yield_label`,
            but they could be for example an UUID, a username or an IP-Address.
        uptime:
            The amount of time the worker is expected to remain online
            without disconnection. Current uptime implementation is based on
            availability percentages. Furthermore, when a Worker joins an
            Hive as a replacement for some other Worker,
            in :py:meth:`~domain.cluster_groups.Hive._membership_maintenance`,
            the time the worker has been online is not considered. Thus,
            if a Worker belongs to only one Hive he is guaranteed to remain
            online for exactly `uptime` *
            :py:attr:`~environment_settings.MAX_EPOCHS`. If he belongs to
            multiple Hives in the simulation, than there is a possibility
            that he may go offline earlier.
        hives:
            A collection of :py:class:`~domain.cluster_groups.Hive` this Worker is a
            member of.
        files:
            A dictionary mapping file names to file block identifiers and their
            respective contents. This collection represents the file block
            replicas that are currently hosted in the Worker instance.
        routing_table:
            Contains the information required to appropriately route file
            block replicas to other Worker instances.
        status:
            Indicates the Worker instance is online or offline. In later
            releases this could also contain a 'suspect' status. See
            :py:class:`~domain.helpers.Enums.Status`
    """

    def __init__(self, uid: str, uptime: float) -> None:
        """Instantiates a Worker object.

        Workers are the network nodes responsible for persisting file block
        replicas.

        Args:
            uid:
                An unique identifier for the worker instance.
            uptime:
                The availability of the worker instance.
        """
        if uptime == 1.0:
            uptime = float('inf')
        else:
            uptime = math.floor(uptime * ms.Hivemind.MAX_EPOCHS)

        self.id: str = uid
        self.uptime: float = uptime
        self.hives: Dict[str, h.Hive] = {}
        self.files: Dict[str, Dict[int, FileBlockData]] = {}
        self.routing_table: Dict[str, pd.DataFrame] = {}
        self.status: int = Status.ONLINE

    # region Routing tables
    def set_file_routing(self,
                         fid: str,
                         transition_vector: Union[pd.Series, pd.DataFrame]
                         ) -> None:
        """Maps a file id with a transition column vector used for routing.

        Args:
            fid:
                The identifier of the file the Hive is persisting.
            transition_vector:
                A column vector with probabilities that dictate the odds of
                sending file block replicas belonging to the file with
                specified id to other Hive members also working on the
                persistence of the file block replicas.
        Raises:
            ValueError: If `transition_vector` is not a pandas DataFrame and
            cannot be directly converted to it.
        """
        if isinstance(transition_vector, pd.Series):
            self.routing_table[fid] = transition_vector.to_frame()
        elif isinstance(transition_vector, pd.DataFrame):
            self.routing_table[fid] = transition_vector
        else:
            raise ValueError("Worker.set_file_routing expects a pandas.Series ",
                             "or pandas.DataFrame as transition vector type.")

    def remove_file_routing(self, fid: str) -> None:
        """Removes a file id from the routing table.

        This method is called when a Worker is evicted from the Hive and
        results in the complete deletion of all file blocks with that file id.

        Args:
            fid:
                Id of the shared file whose routing information is being
                removed from routing_table.
        """
        self.routing_table.pop(fid, None)
        self.files.pop(fid, None)
    # endregion

    # region File Routing and Swarm Guidance Implementation

    def send_part(
            self, hive: h.Hive, part: FileBlockData) -> Union[int, HttpCodes]:
        """Attempts to send a file block replica to another Worker instance.

        Args:
            hive:
                Gateway Hive that will deliver this file to other worker. In
                a real world implementation this argument would not be
                needed, but we use it to facilitate simulation management
                and Hive environment logging.
            part:
                The file block container to be sent to some other worker.
        Returns:
             An HTTP code defined in
             :py:class:`~domain.helpers.Enums.HttpCodes`.
        """
        routing_vector: pd.DataFrame = self.routing_table[part.name]
        hive_members: List[str] = [*routing_vector.index]
        member_chances: List[float] = [*routing_vector.iloc[:, 0]]
        try:
            destination: str = np.random.choice(a=hive_members, p=member_chances).item()  # converts numpy.str to python str
            return hive.route_part(self.id, destination, part)
        except ValueError as vE:
            print(f"{routing_vector}\nStochastic?: {np.sum(member_chances)}")
            sys.exit("".join(traceback.format_exception(etype=type(vE), value=vE, tb=vE.__traceback__)))

    def receive_part(self, part: FileBlockData) -> int:
        """Endpoint for file block replica reception.

        Invoking this method results in the worker keeping store a new
        file block replica in his :py:attr:`~files` collection, along the ones
        already there.

        Args:
            part:
               The file block container to be received by the worker instance.

        Returns:
             An HTTP code defined in
             :py:class:`~domain.helpers.Enums.HttpCodes`. If upon integrity
             verification the sha256 hashvalue differs from the expected,
             the worker replies with a BAD_REQUEST code. If the Worker already
             owns a replica with the same number identifier it
             replies with NOT_ACCEPTABLE. Otherwise it replies with a OK,
             i.e., the delivery is successful.
        """
        if part.name not in self.files:
            self.files[part.name] = {}  # init dict that accepts <key: id, value: sfp> pairs for the file

        if crypto.sha256(part.data) != part.sha256:
            return HttpCodes.BAD_REQUEST  # inform sender that his part is corrupt, don't initiate recovery protocol, to avoid denial of service attacks on worker
        elif part.number in self.files[part.name]:
            return HttpCodes.NOT_ACCEPTABLE  # reject repeated replicas even if they are correct
        else:
            self.files[part.name][part.number] = part
            return HttpCodes.OK  # accepted file part, because Sha256 was correct and Worker did not have this replica yet

    def discard_part(self,
                     fid: str,
                     number: int,
                     corrupt: bool = False,
                     hive: h.Hive = None) -> None:
        """Safely deletes a part from the Worker instance's disk.

        Args:
            fid:
                Name of the file the file block replica belongs to.
            number:
                The part number that uniquely identifies the file block.
            corrupt:
                optional; If discard is being invoked due to identified file
                block corruption, e.g., Sha256 does not match the expected (
                default False).
            hive:
                Gateway Hive that will set the recovery epoch (see
                :py:meth:`~domain.cluster_groups.Hive.set_recovery_epoch` or mark the
                simulation as failed.
        """
        part: FileBlockData = self.files.get(fid, {}).pop(number, None)
        if part and corrupt:
            if part.decrement_and_get_references() == 0:
                hive.set_fail(f"Lost file with id: {part.id} due to corruption")
            else:
                hive.set_recovery_epoch(part)

    def replicate_part(self, hive: h.Hive, part: FileBlockData) -> None:
        """Equal to :py:meth:`~send_part` but with different delivery semantics.

        The file block replica is sent selectively in descending order to the
        most reliable Workers in the Hive down to the least
        reliable. Whereas the first delivers the replicas according to the
        routing column vector for the file id that the block replica belongs to.

        Note:
            This method only makes sense in a simulation environment.

        Args:
            hive:
                Gateway Hive that will deliver the file block replica to
                some destination Worker.
            part:
                The file block replica to be delivered.
        """
        # Number of times the block needs to be replicated.
        lost_replicas: int = part.can_replicate(hive.current_epoch)
        if lost_replicas > 0:

            sorted_members = [*hive.v_.sort_values(0, ascending=False).index]

            for member_id in sorted_members:
                if lost_replicas == 0:
                    break

                route_result = hive.route_part(
                    self.id, member_id, part, fresh_replica=True)

                if route_result == HttpCodes.OK:
                    lost_replicas -= 1
                    part.references += 1
            # replication level may have not been completely restored
            part.update_epochs_to_recover(hive.current_epoch)

    def execute_epoch(self, hive: h.Hive, fid: str) -> None:
        """Instructs the Worker instance to execute the epoch.
        
        The method iterates all file block replicas in :py:attr:`~files` and 
        independently decides if they should be sent to other Worker 
        instances by following :py:attr:`~routing_table` column vectors.

        When a file block is sent to some other Worker a reply is awaited.
        In real world environments this should be assynchronous, but for
        simulation purposes it's synchronous and instantaneous. When the
        destination replies with OK, meaning it accepted the replica,
        this Worker instance deletes the replica from his disk. If it
        replies with a BAD_REQUEST the replica is discarded and the worker
        starts a recovery process in the Hive. Any other code response resuts
        in the Worker instance keeping replica in his disk for at least one
        more epoch times. See :py:class:`~domain.helpers.Enums.HttpCodes`
        for more information on possible HTTP Codes.

        Args:
            hive: 
                Hive instance that ordered execution of the epoch.
            fid:
                The identifier that determines which file blocks 
                replicas should be routed.
        """
        file_view: Dict[int, FileBlockData] = self.files.get(fid, {}).copy()
        for number, part in file_view.items():
            self.replicate_part(hive, part)
            response_code = self.send_part(hive, part)
            if response_code == HttpCodes.OK:
                self.discard_part(fid, number)
            elif response_code == HttpCodes.BAD_REQUEST:
                self.discard_part(fid, number, corrupt=True, hive=hive)
            elif HttpCodes.TIME_OUT or HttpCodes.NOT_ACCEPTABLE or HttpCodes.DUMMY:
                pass  # Keep file part for at least one more epoch
    # endregion

    # region Helpers
    def get_file_parts(self, fid: str) -> Dict[int, FileBlockData]:
        """Gets collection of file parts that correspond to the named file.

        Args:
            fid:
                The identifier that designates the file block replicas
                the caller wishes to obtain from the Worker instance.

        Returns:
             A collection that maps file block identifiers to file block
             containers.
        """
        return self.files.get(fid, {})

    def get_file_parts_count(self, fid: str) -> int:
        """Counts the number of file block replicas owned by the Worker for a given file identifier.

        Args:
             fid:
                An identifier of the file caller wishes to count.
        Returns:
            The number of file block replicas from the named file the Worker
            instance possesses.
        """
        return len(self.files.get(fid, {}))

    def get_epoch_status(self) -> int:
        """Used to obtain the status of the worker.

        This method simulates a ping. When invoked, the Worker instance
        decides if it should switch its status from ONLINE to some other
        depending on the time it has been active in the Hive.

        Returns:
            The status of the worker. See
            :py:class:`~domain.helpers.Enums.Status`.
        """
        if self.status == Status.ONLINE:
            self.uptime -= 1
            self.status = Status.ONLINE if self.uptime > 0 else Status.OFFLINE
        return self.status
    # endregion

    # region Overrides
    def __hash__(self):
        """Allows a Worker instance or a Worker name to be used as dict keys."""
        return hash(str(self.id))

    def __eq__(self, other):
        """Worker equality is based solely on Worker id."""
        return self.id == other

    def __ne__(self, other):
        return not(self == other)
    # endregion
