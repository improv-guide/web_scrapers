FROM salimfadhley/testpython AS uk-improv-guide-scrapers-base
COPY /src/requirements_dev.txt /src/
RUN python -m pip install -r /src/requirements_dev.txt
COPY /src/requirements.txt /src/
RUN python -m pip install -r /src/requirements.txt

FROM uk-improv-guide-scrapers-base as uk-improv-guide-scrapers
COPY src ./src
WORKDIR /src/
RUN ls -l
RUN python ./setup.py develop
#RUN python -m pytest ./test_improv_guide_web_scrapers
#RUN python -m mypy ./improv_guide_web_scrapers ./test_improv_guide_web_scrapers