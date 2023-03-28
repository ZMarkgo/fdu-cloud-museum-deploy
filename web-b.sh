#! /bin/bash

# 设置访问的url
URL="http://10.177.35.97:8085"

#使用说明，用来提示输入参数
usage() {
  echo "Usage: ./web-b-front.sh [start|stop|restart|status|update]"
  echo " - restart：分别重启前后端"
  echo " - update：丢弃所有的本地改动，强制使用origin版本，然后restart"
  echo ">>> 如果启动成功，可以尝试访问：${URL}"
  exit 1
}

start(){
	echo ">>> web-a 前端通过yarn启动"
	chmod +x ./web-a.sh
	./web-a.sh

	echo ">>> web-a 后端通过web-b后端启动"

	echo ">>> web-b 后端通过jar包启动"
	cd web-b-rear
	chmod +x ./web-b-rear.sh
	./web-b-rear.sh start

	echo ">>> web-b 前端通过docker启动"
	cd ../web-b-front
	chmod +x ./web-b-front.sh 
	./web-b-front.sh start
}

stop(){
	cd web-b-rear
	chmod +x ./web-b-rear.sh
	./web-b-rear.sh stop

	cd ../web-b-front
	chmod +x ./web-b-front.sh 
	./web-b-front.sh stop
}

status(){
	cd web-b-rear
	chmod +x ./web-b-rear.sh
	./web-b-rear.sh status

	cd ../web-b-front
	chmod +x ./web-b-front.sh 
	./web-b-front.sh status
}

restart(){
	cd web-b-rear
	chmod +x ./web-b-rear.sh
	./web-b-rear.sh restart

	cd ../web-b-front
	chmod +x ./web-b-front.sh 
	./web-b-front.sh update
}

update(){
	git fetch origin
	git reset --hard origin/main
}

#赋予该脚本执行权限
chmod +x ./web-b.sh

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
  "update")
    update
	restart
    ;;
  *)
    usage
    ;;
esac