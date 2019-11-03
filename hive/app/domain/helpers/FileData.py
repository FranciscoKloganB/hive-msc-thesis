import pandas as pd

from domain.helpers.ConvergenceData import ConvergenceData as cD
from math import ceil

class FileData:
    # region docstrings
    """
    Helper class for domain.Hivemind to keep track of how many parts exist of a file, the number of file parts expected
    to be within the long-term highest density node among other information.
    :ivar file_name: the name of the file
    :type str
    :ivar parts_count: how many parts exist for the
    :type int
    :ivar highest_density_node_label: label of the highest density node
    :type str
    :ivar highest_density_node_density: file density for the highest density node
    :type float
    :ivar desired_distribution: desired distribution that sharers of this file must achieve together but independently
    :type pandas.Dataframe, column vector with labels
    :ivar current_distribution: keeps track of file current distribution, at each discrete time stage
    :type dict<str, list<float>>
    :ivar convergence_data: instance object with general information perteining the simulation
    :type domain.helpers.ConvergenceData
    """
    # endregion

    # region class variables, instance variables and constructors
    def __init__(self,
                 file_name="",
                 parts_count=0,
                 node_name="",
                 density=0.0,
                 ddv=None,
                 cdv=None,
                 convergence_data=None):
        self.file_name = file_name
        self.parts_count = parts_count
        self.highest_density_node_label = node_name
        self.highest_density_node_density = density
        self.desired_distribution = ddv
        self.current_distribution = cdv
        self.convergence_data = convergence_data
    # endregion

    # region instance methods
    def reset_file_data(self, labels):
        """
        :param labels: name of the workers that belong to this file's hive
        :type list<str>
        """
        ddv_len = len(self.desired_distribution)
        if not labels or len(labels) != ddv_len:
            raise ValueError("Can't reset FileData.current_distribution, incorrect labels length...")
        self.current_distribution = pd.DataFrame([0] * ddv_len, index=labels)
        self.convergence_data.save_sets_and_reset()
        self.reset_density_data()

    def reset_density_data(self):
        self.highest_density_node_label = self.desired_distribution.idxmax().values[0]  # index/label of highval
        self.highest_density_node_density = self.desired_distribution.loc[self.highest_density_node_label][0]  # highval

    def replace_node(self, replacement_dict):
        self.desired_distribution.rename(index=replacement_dict, inplace=True)
        self.current_distribution.rename(index=replacement_dict, inplace=True)
        self.reset_density_data()

    def reset_convergence_data(self):
        self.convergence_data.save_sets_and_reset()

    def equal_distributions(self):
        cD.equal_distributions(self.desired_distribution, self.current_distribution)

    def get_failure_threshold(self):
        """
        :returns: the failure threshold for the given file
        :type int
        """
        return self.parts_count - ceil(self.parts_count * self.highest_density_node_density)
    # endregion