import pkg_resources

def get_text(name:str)->str:
    return pkg_resources.resource_string(__name__, name)


