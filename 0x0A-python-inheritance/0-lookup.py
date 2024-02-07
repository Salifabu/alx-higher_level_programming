#!/usr/bin/python3
def lookup(obj):
    """
    Returns a list of available attributes and methods of an object.

    Parameters:
        obj (object): The object to inspect.

    Returns:
        list: A list containing the attributes and methods of the object.
    """
    return [attr for attr in dir(obj) if not callable(getattr(obj, attr)) or not attr.startswith('__')]
