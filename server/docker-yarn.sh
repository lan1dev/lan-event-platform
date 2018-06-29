#!/bin/bash
if [ ! -f /.dockerenv ]; then
    docker exec lan1-server yarn 2> /dev/null || true
fi