# fdu-cloud-museum-deploy

复旦云博，生产环境部署

## web-a

```Shell
cd /home/david/develop/mynerfstudio/nerfstudio/viewer/app/
yarn install
yarn start 

cd /home/david/develop/mynerfstudio
conda activate nerfstudio
ns-train nerfacto  --data data/6 --load-dir outputs/6/nerfacto/2023-03-17_233144/nerfstudio_models --viewer.start-train False --pipeline.model.predict-normals True

nohup ns-train nerfacto \
--data data/6 \
--load-dir outputs/6/nerfacto/2023-03-17_233144/nerfstudio_models \
--viewer.start-train False \
--pipeline.model.predict-normals True \
> show-model-sh.out 2>&1 &
```

## web-b

```shell
cd /home/david/develop/fdu-cloud-museum/fdu-cloud-museum-deploy
chmod +x ./start-web-b.sh
./start-web-b.sh  

cd /home/david/develop/fdu-cloud-museum/fdu-cloud-museum-deploy/web-b-rear

cd web-b-rear
nohup java -jar rear-0.0.1.jar > ../script/log/runjar.out 2>&1 &
/home/david/develop/fdu-cloud-museum/fdu-cloud-museum-deploy/script/log
```

前端：使用docker部署nginx
- 端口映射：8085->80
- http://10.177.35.97:8085
- container：fcm-web-b-front

后端：使用java运行jar包
- http://10.177.35.97:8070

数据库MySQL：使用docker部署

```Shell
docker pull mysql:8.0
docker volume create mysql-data
docker volume ls
docker run -d --name=fcm-mysql-server -p 3306:3306 -v mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=your_password mysql:8.0
sudo docker exec -it fcm-mysql-server mysql -u root -p

mysql> create database mw;
Query OK, 1 row affected (0.00 sec)

mysql> create user 'mwadmin'@'%' identified by 'Admin123!';
Query OK, 0 rows affected (0.02 sec)

mysql> grant all on mw.* to 'mwadmin'@'%';
Query OK, 0 rows affected (0.01 sec)

mysql> quit
Bye
```