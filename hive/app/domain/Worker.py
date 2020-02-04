import numpy as np
import logging as log
import pandas as pd

from utils import crypto
from copy import deepcopy
from globals.globals import DEFAULT_COLUMN
from domain.Hive import Hive
from domain.Enums import Status, HttpCodes
from domain.SharedFilePart import SharedFilePart
from utils.ResourceTracker import ResourceTracker as rT

from typing import Union, Dict, Any, List


class Worker:
    """
    Defines a worker node on the P2P network.
    :ivar float uptime: average worker uptime
    :ivar str id: unique identifier of the worker instance on the network
    :ivar Dict[str, Hive] hives: dictionary that maps the hive_ids' this worker instance belongs to, to the respective Hive instances
    :ivar Dict[str, pd.DataFrame] routing_table: maps file names with their state transition probabilities
    :ivar Dict[str, Dict[int, SharedFilePart]] file_index: collection of file parts kept by the worker instance
    :ivar Union[int, Status] status: indicates if this worker instance is online or offline
    """

    # region Class Variables, Instance Variables and Constructors
    def __init__(self, name: str, uptime: float):
        self.id: str = name
        self.uptime: float = uptime
        self.hives: Dict[str, Hive] = {}
        self.routing_table: Dict[str, pd.DataFrame] = {}
        self.file_index: Dict[str, Dict[int, SharedFilePart]] = {}
        self.status: Union[int, Status] = Status.ONLINE
    # endregion

    # region Recovery
    def init_recovery_protocol(self, file_name: str) -> None:
        """
        Reconstructs a file and then splits it into globals.READ_SIZE before redistributing them to the rest of the hive
        :param str file_name: name of the shared file that needs to be reconstructed by the Worker instance
        """
        # TODO future-iterations:
        pass
    # endregion

    # region Routing Table
    def set_file_routing(self, file_name: str, transition_vector: pd.DataFrame) -> None:
        """
        Maps file name with state transition probabilities used for routing
        :param str file_name: a file name that is being shared on the hive
        :param pd.DataFrame transition_vector: probabilities of going from current worker to some worker on the hive
        """
        self.routing_table[file_name] = transition_vector

    def remove_file_routing(self, file_name: str) -> None:
        """
        Removes a shared file's routing information from the routing table
        :param str file_name: name of the shared file whose routing information is being removed from routing_table
        """
        try:
            self.file_index.pop(file_name)
        except KeyError as kE:
            log.error("Key ({}) doesn't exist in worker {}'s sf_parts dict".format(file_name, self.id))
            log.error("Key Error message: {}".format(str(kE)))
    # endregion

    # region File Routing
    def send_part(self, part: SharedFilePart) -> Union[int, HttpCodes]:
        """
        Attempts to send a file part to another worker
        :param SharedFilePart part: data class instance with data w.r.t. the shared file part and it's raw contents
        """
        destination = self.select_destination(part.name)
        if destination == self.id:
            return HttpCodes.DUMMY
        return self.hives[part.hive_id].route_part(destination, part)

    def reroute_part(self, part: SharedFilePart) -> None:
        response_code = HttpCodes.DUMMY
        while response_code != HttpCodes.OK:
            response_code = self.send_part(part)

    def receive_part(self, part: SharedFilePart) -> None:
        """
        Keeps a new, single, shared file part, along the ones already stored by the Worker instance
        :param SharedFilePart part: data class instance with data w.r.t. the shared file part and it's raw contents
        """
        if part.name not in self.file_index:
            self.file_index[part.name] = {}  # init dict that accepts <key: id, value: sfp> pairs for the file

        if part.number in self.file_index[part.name]:
            self.reroute_part(part)  # pass part's replica to someone else, who might or might not have it.
        elif crypto.sha256(part.data) == part.sha256:
            self.file_index[part.name][part.number] = part  # if sha256 is correct and worker does not have a replica, he keeps it
        else:
            print("shared file part id: {}, corrupted".format(part.id))
            self.init_recovery_protocol(part.name)
    # end region

    def execute_epoch(self) -> None:
        """
        For each part kept by the Worker instance, get the destination and send the part to it
        """
        hive: Hive
        epoch_cache: Dict[int, SharedFilePart]
        destination: str

        for file_name, part_number_sfp_dict in self.file_index.items():
            epoch_cache = {}
            for part_number, part in part_number_sfp_dict.items():
                response_code = self.send_part(part)
                if response_code != HttpCodes.OK:
                    epoch_cache[part_number] = part
            self.file_index[file_name] = epoch_cache
    # endregion

    # region Helpers
    # noinspection PyIncorrectDocstring
    @staticmethod
    def get_resource_utilization(*args) -> Dict[str, Any]:
        """
        Obtains one ore more performance attributes for the Worker's instance machine
        :param *args: Variable length argument list. See below
        :keyword arg:
        :arg cpu: system wide float detailing cpu usage as a percentage,
        :arg cpu_count: number of non-logical cpu on the machine as an int
        :arg cpu_avg: average system load over the last 1, 5 and 15 minutes as a tuple
        :arg mem: statistics about memory usage as a named tuple including the following fields (total, available),
        expressed in bytes as floats
        :arg disk: get_disk_usage dictionary with total and used keys (gigabytes as float) and percent key as float
        :returns Dict[str, Any] detailing the usage of the respective key arg. If arg is invalid the value will be -1.
        """
        results: Dict[str, Any] = {}
        for arg in args:
            results[arg] = rT.get_value(arg)
        return results

    def get_all_parts(self) -> Dict[str, Dict[int, SharedFilePart]]:
        """
        Sends all shared file parts kept by the Worker instance to the requestor regardless of the file's hive
        :returns Dict[str, Dict[int, SharedFilePart]]: a deep copy of the Worker's instance shared file parts
        """
        return deepcopy(self.file_index)

    def get_parts_count(self, sf_name: str) -> int:
        """
        Counts how many parts the Worker instance has of the named file
        :param sf_name: name of the file kept by the Worker instance that must be counted
        :returns int: number of parts from the named shared file currently on the Worker instance
        """
        return len(self.file_index[sf_name])

    def select_destination(self, sf_name: str) -> str:
        """
        Selects the next destination for a shared file part
        :param str sf_name: the name of the file the part to be routed belongs to
        :returns str: the name of the worker to whom the file should be routed too
        """
        routing_vector: pd.DataFrame = self.routing_table[sf_name]
        hive_members: List[str] = [*routing_vector.index]
        member_chances: List[float] = [*routing_vector.iloc[:, DEFAULT_COLUMN]]
        return np.random.choice(a=hive_members, p=member_chances).item()  # converts numpy.str to python str
    # endregion

    # region override class methods
    def __hash__(self):
        # allows a worker object to be used as a dictionary key
        return hash(str(self.id))

    def __eq__(self, other):
        return self.id == other

    def __ne__(self, other):
        return not(self == other)
    # endregion
