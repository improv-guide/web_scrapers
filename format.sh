#!/usr/bin/env bash
docker run -v `pwd`/src/main:/src salimfadhley/cleaner:latest
docker run -v `pwd`/src/test:/src salimfadhley/cleaner:latest