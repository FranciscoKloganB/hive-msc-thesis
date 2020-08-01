"""This functionality offered by this module is used to start simulations.

    You can start simulations by executing the following command::

        $ python hive_simulation.py --simfile=filename.json --iters=30

    If you don't have a simulation file yet, run the following instead::

        $ python simulation_file_generator.py --simfile=filename.json

    Notes:
        For the simulation to run without errors you must ensurue that::
            1. The specified simulation file exists in
            :py:const:`~globals.globals.SIMULATION_ROOT`.

            2. Any file used by the simulation, e.g., a picture or a .pptx
            document is accessible in :py:const:`~globals.globals.SHARED_ROOT`.

            3. An output file directory exists with default path being:
            :py:const:`~globals.globals.OUTFILE_ROOT`.
"""

import getopt
import os
import sys

import domain.Hivemind as hm
from globals.globals import SIMULATION_ROOT, OUTFILE_ROOT, SHARED_ROOT

err_message = ("Invalid arguments. At least simfile arg must be specified.\n",
               "$ python hive_simulation.py --simfile=simulationfilename.json")


def multithreaded_main(fid, iters):
    for run in range(iters):
        simulation = hm.Hivemind(simfile_name=fid, sim_id=run)
        simulation.execute_simulation()


def main(fid, iters, multithread):
    if not fid:
        sys.exit("Invalid simulation file name - blank name not allowed)...")

    if not os.path.exists(SHARED_ROOT):
        os.makedirs(SHARED_ROOT)

    if not os.path.exists(SIMULATION_ROOT):
        os.makedirs(SIMULATION_ROOT)

    if not os.path.exists(OUTFILE_ROOT):
        os.makedirs(OUTFILE_ROOT)

    if multithread:
        multithreaded_main(fid, iters)
        return
    else:
        for i in range(iters):
            simulation = hm.Hivemind(simfile_name=fid, sim_id=i)
            simulation.execute_simulation()

        # input_simulation_files: List[str] = os.listdir(SIMULATION_ROOT)
        # for name in input_simulation_files:
        #     for i in range(iters):
        #         simulation = hm.Hivemind(simfile_name=name, sim_id=i+1)
        #         simulation.execute_simulation()


if __name__ == "__main__":
    simfile = None
    threading = False
    iterations = 30

    try:
        options, args = getopt.getopt(
            sys.argv[1:], "ts:r:", ["threading", "simfile=", "iters="])

        for options, args in options:
            if options in ("-s", "--simfile"):
                simfile = str(args).strip()
            if options in ("-i", "--iters"):
                iterations = int(str(args).strip())
            if options in ("-t", "--threading"):
                threading = True

        if simfile and iterations:
            main(simfile, iterations, threading)
        else:
            print(err_message)

    except getopt.GetoptError:
        print(err_message)
