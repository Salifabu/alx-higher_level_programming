#!/usr/bin/python3

def square_matrix_simple(matrix):

    if not matrix:
        print("Error: Empty matrix")
        return None

    return [[element ** 2 for element in row] for row in matrix]
