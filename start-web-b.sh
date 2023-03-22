#! /bin/bash
cd web-b-rear
chmod +x ./start-web-b-rear.sh
./start-web-b-rear.sh
cd ../web-b-front
echo "web-b 前端需要通过docker启动"
