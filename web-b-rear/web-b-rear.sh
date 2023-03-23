#!/bin/bash

#设置jar包名称和日志路径
APP_NAME="rear-0.0.1.jar"
LOG_FILE="/home/david/develop/fdu-cloud-museum/fdu-cloud-museum-deploy/log/runjar.out"
#使用说明，用来提示输入参数
usage() {
    echo "Usage: ./web-b-rear.sh [start|stop|restart|status]"
    exit 1
}
 
#检查程序是否在运行
is_exist(){
  pid=`ps -ef|grep $APP_NAME|grep -v grep|awk '{print $2}' `
  #如果不存在返回1，存在返回0     
  if [ -z "${pid}" ]; then
   return 1
  else
    return 0
  fi
}
 
#启动方法
start(){
  is_exist
  if [ $? -eq "0" ]; then
    echo ">>> ${APP_NAME} 正在运行，PID=${pid}，不需要启动"
  else
    nohup java -jar $APP_NAME > $LOG_FILE 2>&1 &
    echo ">>> ${APP_NAME} 启动成功 PID=$!"
  fi
}
 
#停止方法
stop(){
  is_exist
  if [ $? -eq "0" ]; then
    kill -9 $pid
    echo ">>> ${APP_NAME} 停止运行成功"
  else
    echo ">>> ${APP_NAME} 没有在运行，不需要停止"
  fi  
}
 
#输出运行状态
status(){
  is_exist
  if [ $? -eq "0" ]; then
    echo ">>> ${APP_NAME} 正在运行，Pid=${pid}"
  else
    echo ">>> ${APP_NAME} 没有在运行"
  fi
}
 
#重启
restart(){
  stop
  start
}
 
#根据输入参数，选择执行对应方法，不输入则执行使用说明
case "$1" in
  "start")
    start
    ;;
  "stop")
    stop
    ;;
  "status")
    status
    ;;
  "restart")
    restart
    ;;
  *)
    usage
    ;;
esac
