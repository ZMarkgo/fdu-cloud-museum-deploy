#!/bin/bash

# 获取输入参数：端口号
PORT=7007

# 查找占用端口的进程ID
PID=$(lsof -t -i:$PORT)

echo "test"

if [[ -z $PID ]]; then
  echo "端口 $PORT 没有被占用"
else
  # 结束占用端口的进程
  kill -9 $PID
  echo "成功杀死进程 $PID，释放端口 $PORT"
fi