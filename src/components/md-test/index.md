

# 用Docker部署前后端项目

在完成项目代码的编写之后怎么让其他人也看到？比如 https://blog432.exering.cn 这个网站是怎样做到能够访问的：

<img src="https://liuzihan-pics.obs.cn-south-1.myhuaweicloud.com/imgs/notes/04/202304051408389.jpg" style="zoom: 25%;" />

> 注意📢：
> 本次部署全部基于**docker**，请确保你的服务器或其他主机已经安装了**docker**与**docker-compose**。

## 1. 用Docker部署前端应用

### 1.1 准备前端应用打包文件与Nginx配置

#### 前端应用

在前端项目执行完`bulid`命令后会生成最后的打包文件夹，默认文件夹名为`dist`内容大致如下：

![](https://liuzihan-pics.obs.cn-south-1.myhuaweicloud.com/imgs/notes/2023/04/202304051030417.png)

#### Nginx配置

准备Nginx配置文件，用于挂载Docker容器

+ 首先创建一个**nginx**文件夹，在其中创建**conf**和**html**文件夹。

+ 将之前打包好的前端应用文件夹放入**html**文件夹下。

+ 再在**conf**文件夹下创建一个**nginx.conf**文件。

+ 打开**nginx.conf**文件，写入以下内容：

  ~~~~yaml
  worker_processes  1;
  
  events {
      worker_connections  1024;
  }
  
  http {
      include       mime.types;
      default_type  application/octet-stream;
  
      sendfile        on;
  
      keepalive_timeout  65;
  
      server {
          listen       80;
          # listen       your_loadblance_port;
          server_name  your_domain_or_your_ip;
  
          location / {
              root   html/dist; # 如果你改了打包后的文件夹名此处对应修改
              index  index.html index.htm;
              try_files $uri $uri/ /index.html;
          }
          # 后端api请求
          location /api/ {
              proxy_pass http://your_api_host/;
          }
  
          error_page   500 502 503 504  /50x.html;
          location = /50x.html {
              root   html;
          }
  
      }
  
  }
  
  ~~~~

### 1.2 服务器部署

+ 首先准备好**docker-compose.yaml**文件

  ~~~~yaml
  version: "3"
  
  services:
    your_service:
      image: nginx:latest
      container_name: your_container
      restart: on-failure:3
      networks:
        - your_net
        # - proxy # your_traefik_net 
      volumes:
        - ../nginx/conf/nginx.conf:/etc/nginx/nginx.conf
        - ../nginx/conf/conf.d:/etc/nginx/conf.d
        - ../nginx/log:/var/log/nginx
        - ../nginx/html:/etc/nginx/html
      ports:
        - 80:80
      # labels: # your_traefik_configuration
      #   - "traefik.enable=true"
      #   - "traefik.http.routers.your_container.entrypoints=web, websecure"
      #   - "traefik.http.routers.your_container.rule=Host(`your_domian`)"
      #   - "traefik.http.services.your_container.loadbalancer.server.port=your_loadbalancer_port"
  
  networks:
    # your_traefik_net:
    #   external: true
    your_net: {}
  
  ~~~~

+ 在服务器上根据个人习惯创建好你的工作目录。

  ~~~~shell
  # 如在 ~ 目录下创建一个 services 目录用于存放所有上云应用
  yourname@yourhost:~/services$ pwd
  /home/yourname/services
  
  # 创建 yourapplication 目录，用于存放要部署应用的所有文件
  # 创建yourapplication下docker目录，用于存放docker相关的文件
  yourname@yourhost:~/services$ mkdir -p yourapplication/docker
  
  # 进入 yourapplication
  yourname@yourhost:~/services$ cd yourapplication
  ~~~~

+ 将**docker-compose.yaml**文件上传到**docker目录**下

+ 将之前准备好的**nginx**文件夹上传到**yourapplication目录**下，结果如下:

  ~~~~shell
  yourname@yourhost:~/services/yourapplication$ ls
  docker  nginx
  ~~~~

+ 最后进入**docker**目录，执行`docker-compose up -d`命令即可部署完成

  ~~~~shell
  yourname@yourhost:~/services/yourapplication/docker$ docker-compose up -d
  
  # 完成后可执行 docker ps 查看容器是否启动成功
  ~~~~

## 2. 用Docker部署SpringBoot后端服务器

### 2.1 准备项目jar包和docker相关文件

+ 首先修改**application.yml**或**application.properties**，修改文件中访问数据库的**host**，以下为例：

  ~~~~yaml
  server:
    port: yourport
  spring:
    datasource:
      url: jdbc:mysql://mysql:3306/your_db?useSSL=false&characterEncoding=utf-8&serverTimezone=Asia/Shanghai # 修改此处host
      username: yourusername
      password: yourpassword
      driver-class-name: com.mysql.cj.jdbc.Driver
    redis:
      port: 6379
      host: redis # 修改此处host
  ~~~~

+ 使用**Maven**先**clean**清除target文件夹，再**package**将项目打成jar包，项目jar包位于target目录下

  ![](https://liuzihan-pics.obs.cn-south-1.myhuaweicloud.com/imgs/notes/2023/04/202304051139912.png)

+ 编写**Dockerfile**文件

  ~~~~shell
  FROM openjdk:8-jdk-alpine
  COPY ./*.jar /app.jar
  ENTRYPOINT ["java","-jar","app.jar"]
  ~~~~

+ 编写**docker-compose.yaml**文件

  ~~~~shell
  version: '3' 
  services:
    your_service_name:
      container_name: your_name
      build: ./
      restart: on-failure:3
      ports:
        - your_port:your_port # - SpringBoot中配置的server.port
      networks:
        - your_net
      depends_on:
        - mysql
        - redis
        
    mysql:
      container_name: mysql-name
      image: mysql
      restart: on-failure:3
      command: --default-authentication-plugin=mysql_native_password
        --character-set-server=utf8mb4
        --collation-server=utf8mb4_general_ci
        --explicit_defaults_for_timestamp=true
      environment:
        # MYSQL_USER: youruser
        MYSQL_PASSWORD: yourpassword
        # MYSQL_DATABASE: your_db
        MYSQL_ROOT_PASSWORD: your_rootpassword
        TZ: Asia/Shanghai
      volumes:
        - /etc/localtime:/etc/localtime:ro
        - ../mysql:/var/lib/mysql
        - ../conf/my.cnf:/etc/my.cnfs
       #- ./mysqlBackup:/data/mysqlBackup
      # ports:
      #   - 3306:3306 # 开发阶段可以暴露端口
      networks:
        - your_net
    redis:
      image: redis
      container_name: redis-name
      restart: on-failure:3
      volumes:
        - ../redis/datadir:/data
        - ../redis/conf/redis.conf:/etc/redis/redis.conf
        - ../redis/logs:/logs
      command: redis-server --requirepass 123456
      # ports:
      #   - 6379:6379 # 开发阶段可以暴露端口
      networks:
        - your_net
  
  networks:  # 定义网络
    your_net: {}
  
  ~~~~

### 2.2 服务器部署

+ 首先创建工作目录，与前端部署类似，只是在**docker**目录下需要上传**docker-compose.yaml文件**、**Dockerfile文件**和**项目jar包**。

  ~~~~shell
  yourname@yourhost:~/services/yourapplication/docker$ ls
  docker-compose.yml  Dockerfile  your_project_name.jar
  ~~~~

+ 执行`docker-compose up -d`命令即可部署完成

  ~~~~shell
  yourname@yourhost:~/services/yourapplication/docker$ docker-compose up -d
  
  # 完成后可执行 docker ps 查看容器是否启动成功
  ~~~~

### 2.3 注意

> 如果想要与前端应用完成数据交互，需要nginx.conf中的：
>
> ~~~~shell
> # 后端api请求
> location /api/ {
> proxy_pass http://your_api_host/;
> }
> ~~~~
>
> 其中your_api_host要与后端相对应，如服务器的一个域名为api.example.com，SpringBoot项目中的server.port配置为7777则：
>
> ~~~~shell
> # 后端api请求
> location /api/ {
> proxy_pass http://api.example.com:7777/;
> }
> ~~~~

## 3. 访问链接

<img src="https://liuzihan-pics.obs.cn-south-1.myhuaweicloud.com/imgs/notes/04/202304051408389.jpg" style="zoom:25%;" />
