#!/usr/bin/python3

def safe_print_list_integers(my_list=[], x=0):

    count = 0

    for i in range(x):
        try:
            integer_value = [v for v in [my_list[i]] if isinstance(v, int)][0]
            print("{:d}".format(integer_value), end="")
            count += 1
        except (ValueError, TypeError, IndexError):
            pass

    print()
