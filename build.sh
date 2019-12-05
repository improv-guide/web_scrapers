#!/usr/bin/env bash
set -e
. ./.env
echo "Building ${IMPROV_GUIDE_SCRAPERS_VERSION}"
echo "${IMPROV_GUIDE_SCRAPERS_VERSION}" > ./src/version.txt
docker-compose -f docker-compose.yaml build --force
