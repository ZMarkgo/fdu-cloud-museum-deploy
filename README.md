# fdu-cloud-museum-deploy

复旦云博，生产环境部署

## web-b

前端：使用docker部署nginx
- 端口映射：8085->80
- http://10.177.35.97:8085

后端：使用java运行jar包
- http://10.177.35.97:8070

数据库MySQL：使用docker部署

```Shell
docker pull mysql:8.0
docker volume create mysql-data
docker volume ls
docker run -d --name=fcm-mysql-server -p 3306:3306 -v mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=your_password mysql
sudo docker exec -it fcm-mysql-server mysql -u root -p
```