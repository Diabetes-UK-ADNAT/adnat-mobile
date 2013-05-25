#!/bin/bash

date
time find ./build/adnat/production/ -type f -name "*.js" |xargs grep "isDev: false"
date

echo "Look for isDev: false and you are ready to go"
