#!/bin/bash

date
echo "Pushing adnat-touch "

rsync -v -e "ssh -p 12222 -x -a -l ubu-install-jeos"     \
--include '.htaccess' \
--exclude '.DS_Store'  \
--exclude '*swp' \
-aruzitPL  \
build/adnat/production/ \
67.18.182.74:/var/www/adnat-touch

date
