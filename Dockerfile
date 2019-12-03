# Base Image, Python Interpreter
FROM python:3.8-buster AS uk-improv-guide-scrapers-base
RUN apt-get update
RUN mkdir /tmp/install
COPY /src/requirements_dev.txt /tmp/install/requirements_dev.txt
RUN python -m pip install -r /tmp/install/requirements_dev.txt
RUN apt-get install git
RUN rm -rf /tmp/install

FROM uk-improv-guide-scrapers-base
COPY /src/requirements.txt /src/
RUN python -m pip install -r /src/requirements.txt

FROM uk-improv-guide-scrapers-base as uk-improv-guide-scrapers
COPY src ./src
WORKDIR /src/
RUN ls -l
RUN python ./setup.py develop
#RUN python -m pytest ./test_improv_guide_web_scrapers
#RUN python -m mypy ./improv_guide_web_scrapers ./test_improv_guide_web_scrapers