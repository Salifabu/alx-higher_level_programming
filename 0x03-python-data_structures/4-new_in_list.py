def new_in_list(my_list, idx, element):
    if 0 <= idx < len(my_list):
        tmp_list = my_list[:]
        tmp_list[idx] = element
        return tmp_list
    return my_list
