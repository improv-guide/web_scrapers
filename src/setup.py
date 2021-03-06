#! /usr/bin/env python
import os

from setuptools import setup, find_packages

PROJECT_ROOT, _ = os.path.split(__file__)
with open("version.txt") as vf:
    REVISION = vf.read().strip()

print(f"**** BUILDING {REVISION} .")

PROJECT_NAME = "improv_guide_web_scrapers"
PROJECT_AUTHORS = "Salim Fadhley"
PROJECT_EMAILS = "salimfadhley@gmail.com"
PROJECT_URL = "https://github.com/improv_guide/web_scrapers"
SHORT_DESCRIPTION = "Web Scrapers for the Improv Guide"

try:
    DESCRIPTION = open(os.path.join(PROJECT_ROOT, "readme.md")).read()
except IOError:
    DESCRIPTION = SHORT_DESCRIPTION

try:
    REQUIREMENTS = list(open("requirements.txt").read().splitlines())
except IOError:
    REQUIREMENTS = []


packages = find_packages(where="main")

print(f"*** Packages: {packages}")



setup(
    name=PROJECT_NAME.lower(),
    version=REVISION,
    author=PROJECT_AUTHORS,
    author_email=PROJECT_EMAILS,
    package_dir={"":"main"},
    packages=packages,
    zip_safe=True,
    include_package_data=False,
    install_requires=REQUIREMENTS,
    url=PROJECT_URL,
    description=SHORT_DESCRIPTION,
    long_description=DESCRIPTION,
    license="MIT",
    entry_points={"console_scripts": ["manage = uk_improv_guide.manage:main"]},
)
