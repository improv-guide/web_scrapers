import pkg_resources


def get_text(name: str) -> bytes:
    return pkg_resources.resource_string(__name__, name)
