#! /bin/bash
workDir=$1
jarFileName=$2
runjarLogPath=$2
cd ${workDir}
nohup java -jar ${jarFileName} > ${runjarLogPath} 2>&1 &