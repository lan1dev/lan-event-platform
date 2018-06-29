#!/bin/bash
if [ ! -f /.dockerenv ]; then
    docker exec lan1-client yarn 2> /dev/null || true
fi