#!/bin/bash
find . -type f -name "*.js" |xargs grep --color "isDev:"
