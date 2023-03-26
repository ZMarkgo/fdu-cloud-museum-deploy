#! /bin/bash

# 设置访问的url
URL="http://10.177.35.97:4000"
LOG_FILE="/home/david/develop/fdu-cloud-museum/fdu-cloud-museum-deploy/log/runyarn.out"

cd /home/david/develop/mynerfstudio/nerfstudio/viewer/app/
yarn start
nohup yarn start > $LOG_FILE 2>&1 &