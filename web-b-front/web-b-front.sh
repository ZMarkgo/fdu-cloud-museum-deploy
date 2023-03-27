#!/bin/bash

# 容器已经构建好，且可运行

# 设置访问的url
URL="http://10.177.35.97:8085"
# 设置脚本运行输出文件
run_docker_out="../log/run_docker.out"

# 容器暴露的端口
PORT="80"
# 容器映射到本机的端口
MAPPING_PORT="8085"

# Docker镜像名称
IMAGE_NAME="fcm-web-b-nginx"
# nginx容器名称
CONTAINER_NAME="fcm-web-b-front"
# 获取容器ID
container_id=$(docker ps -aqf "name=$CONTAINER_NAME")
# 检查Docker是否已安装
if ! command -v docker &> /dev/null
then
    echo ">>> Docker未安装，请先安装Docker"
    exit 1
fi

# 检查容器是否正在运行
is_running(){
  if [[ "$(docker inspect -f '{{.State.Running}}' $CONTAINER_NAME 2>/dev/null)" == "true" ]]; then
    return 1
  else
    return 0
  fi
}

#使用说明，用来提示输入参数
usage() {
  echo "Usage: ./web-b-front.sh [start|stop|restart|status|update]"
  echo ">>> 如果启动成功，可以尝试访问：${URL}"
  exit 1
}

#启动方法
start(){
  is_running
  if [ $? -eq "1" ]; then
    echo ">>> 容器 ${CONTAINER_NAME} 已经在运行中，不需要启动"
  else
    docker container start ${container_id} > $run_docker_out
    echo ">>> 容器 ${CONTAINER_NAME} 启动成功"
  fi
  echo ">>> 可以尝试访问：${URL}"
}
 
#停止方法
stop(){
  is_running
  if [ $? -eq "1" ]; then
    docker stop $CONTAINER_NAME > $run_docker_out
    echo ">>> 容器 ${CONTAINER_NAME} 停止运行成功"
  else
    echo ">>> 容器 ${CONTAINER_NAME} 未运行，不需要停止"
  fi  
}
 
#输出运行状态
status(){
  is_running
  if [ $? -eq "1" ]; then
    echo ">>> 容器 ${CONTAINER_NAME} 正在运行"
    echo ">>> 可以尝试访问：${URL}"
  else
    echo ">>> 容器 ${CONTAINER_NAME} 未在运行"
  fi
}

#更新docker容器和docker镜像并运行
build_and_run(){
	# 停止并删除旧的Docker容器
  stop
  docker rm $CONTAINER_NAME > $run_docker_out
  # 删除旧的Docker镜像
  docker rmi $IMAGE_NAME > $run_docker_out
  # 构建新的Docker镜像
  docker build -t $IMAGE_NAME . > $run_docker_out
  # 运行新的Docker容器
  docker run -d -p $MAPPING_PORT:$PORT --name $CONTAINER_NAME $IMAGE_NAME > $run_docker_out
  echo ">>> web-b 前端更新成功"
  echo ">>> - image_name: ${IMAGE_NAME}"
  echo ">>> - container_name: ${CONTAINER_NAME}"
  echo ">>> 可以尝试访问：${URL}"
}
 
#重启
restart(){
  docker restart ${container_id} > $run_docker_out
	echo ">>> 容器 $CONTAINER_NAME 已重新启动"
  echo ">>> 可以尝试访问：${URL}"
}

#根据输入参数，选择执行对应方法，不输入则执行使用说明
case "$1" in
  "start")
    build_and_run
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
  "update")
    build_and_run
    ;;
  *)
    usage
    ;;
esac
