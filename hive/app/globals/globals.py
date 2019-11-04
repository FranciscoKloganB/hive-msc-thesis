import os

DEBUG = False

# region integer constants
READ_SIZE = 2048
DEFAULT_COLUMN = 0
# endregion

# region path constants
SHARED_ROOT = os.path.join(os.getcwd(), 'static', 'shared')
OUTFILE_ROOT = os.path.join(os.getcwd(), 'static', 'outfiles')
SIMULATION_ROOT = os.path.join(os.getcwd(), 'static', 'simfiles')
# endregion
