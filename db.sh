#!/bin/sh
docker run -it --rm -p 5432:5432 -e POSTGRES_PASSWORD=123 -e POSTGRES_DB=covid-api postgres:alpine
