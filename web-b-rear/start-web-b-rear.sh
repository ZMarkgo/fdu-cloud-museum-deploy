#! /bin/bash
# 启动web-b后端的脚本

# 获取脚本运行的路径
DIRNAME=$0
if [ "${DIRNAME:0:1}" = "/" ];then
    CURDIR=`dirname $DIRNAME`
else
    CURDIR="`pwd`"/"`dirname $DIRNAME`"
fi
workDir="${CURDIR}"
jarFileName="rear-0.0.1.jar"
runjarLogPath="script/log/runjar.out"

cd ../script/runjar.sh
./runjar.sh ${workDir} ${jarFileName} ${runjarLogPath}