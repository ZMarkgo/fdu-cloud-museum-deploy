#! /bin/bash
workDir=$1
jarFileName=$2
runjarOutPath=$2
cd ${workDir}
nohup java -jar ${jarFileName} > ${runjarOutPath} 2>&1 &