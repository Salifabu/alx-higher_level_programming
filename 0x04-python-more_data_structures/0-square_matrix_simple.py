#!/bin/bash/python3

def square_matrix_simple(matrix=None):

    if matrix is None:
        print("Error: Empty matrix")
        return None

    result_matrix = [[element ** 2 for element in row] for row in matrix]

    return result_matrix
