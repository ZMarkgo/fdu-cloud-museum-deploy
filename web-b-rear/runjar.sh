#! /bin/bash
# 启动web-b后端的脚本

jarFileName="rear-0.0.1.jar"
runjarLogPath="../script/log/runjar.out"
nohup java -jar ${jarFileName} > ${runjarOutPath} 2>&1 &