# 设置基础镜像
FROM nginx
# 定义作者  
MAINTAINER ZMark <351479188@qq.com>
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 目录下面  
COPY dist/ /usr/share/nginx/html/   
COPY nginx.conf /etc/nginx/nginx.conf
RUN echo 'init ok!!'