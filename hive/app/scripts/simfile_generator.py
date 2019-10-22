import os
import sys
import getopt
import itertools

import scripts.continous_label_generator as cg
import scripts.skewed_distribution_generator as sg

from pathlib import Path
from globals.globals import SHARED_ROOT


def usage():
    print(" -------------------------------------------------------------------------")
    print(" Francisco Barros (francisco.teixeira.de.barros@tecnico.ulisboa.pt\n")
    print(" Generates a simulation file that can be used as input to an HIVE simulation\n")
    print(" Typical usage: simfile_generator.py --simfile=<name>.json\n")
    print(" Display all optional flags and other important notices: main.py --help\n")
    print(" -------------------------------------------------------------------------\n")
    sys.exit(" ")


def __in_max_stages():
    max_stages = input("Enter the maximum amount of stages (100, inf) the simulation should run:\n")
    while True:
        try:
            max_stages = int(max_stages)
            if max_stages > 99:
                return max_stages
            print("Maximum stages input should be a number bigger or equal to 100... Try again;")
        except ValueError:
            print("Input should be an integer.. Try again;")
            continue


def __in_number_of_nodes():
    node_count = input("Enter the number of nodes you wish to have in the network [2, 9999]:\n")
    while True:
        try:
            node_count = int(node_count)
            if 1 < node_count < 10000:
                return node_count
            print("At least two nodes should be created. Insert a value between, and including, 2 and 9999...")
        except ValueError:
            print("Input should be an integer.. Try again;")
            continue


def __in_min_node_uptime():
    min_uptime = input("Enter the number of nodes you wish to have in the network (0.0, 100.0):\n")
    while True:
        try:
            min_uptime = float(min_uptime)
            if 0.0 <= min_uptime <= 100.0:
                return min_uptime
            print("Minimum node uptime should be between 0.0 and 100.0... Try again;")
        except ValueError:
            print("Input should be an float.. Try again;")
            continue


def __init_nodes_uptime_dict():
    number_of_nodes = __in_number_of_nodes()
    min_uptime = __in_min_node_uptime()
    print("Please wait ¯\\_(ツ)_/¯ Generation of uptimes for each node may take a while.")
    samples = sg.generate_skewed_samples().tolist()
    print("Keep calm. We are almost there...")
    nodes_uptime_dict = {}
    for label in itertools.islice(cg.yield_label(), number_of_nodes):
        uptime = samples.pop()  # gets and removes last element in samples to assign it to label
        nodes_uptime_dict[label] = round(uptime, 6) if uptime > min_uptime else round(min_uptime, 6)
    samples.clear()
    return nodes_uptime_dict


def __init_shared_dict():
    shared_dict = {}

    print("Any file you want to simulate persistance of must be inside the following folder: ~/hive/app/static/shared")
    print("You may also want to keep a backup of such file in:  ~/hive/app/static/shared/shared_backups")

    add_file = True
    while add_file:
        file_name = input("Insert the name of the file you wish to persist (include extension): ")

    return shared_dict


def main(simfile_name):
    if not simfile_name:
        sys.exit("Invalid simulation file name - blank name not allowed)...")

    os.path.join(SHARED_ROOT, simfile_name)

    simfile_json = {}
    simfile_json["max_stages"] = __in_max_stages()
    simfile_json["nodes_uptime"] = __init_nodes_uptime_dict()
    simfile_json["shared"] = __init_shared_dict()


# noinspection DuplicatedCode
if __name__ == "__main__":
    simfile_name_ = None
    try:
        options, args = getopt.getopt(sys.argv[1:], "ups:", ["usage", "plotuptimedistr", "simfile="])
        for options, args in options:
            if options in ("-u", "--usage"):
                usage()
            if options in ("-p", "--plotuptimedistr"):
                bin_count_ = int(input("How many bins should the distribution have?"))
                sample_count_ = int(input("How many samples should be drawn?"))
                sg.plot_uptime_distribution(bin_count_, sample_count_)
            if options in ("-s", "--simfile"):
                simfile_name_ = str(args).strip()
                main(simfile_name_)
    except getopt.GetoptError:
        usage()


