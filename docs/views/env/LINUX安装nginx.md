---
sidebar: auto
---

# LINUX安装nginx



1.安装依赖包

    //一键安装上面四个依赖
    yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel

2.下载并解压安装包

    //创建一个文件夹
    cd /usr/local
    mkdir nginx
    cd nginx
    //下载tar包
    wget http://nginx.org/download/nginx-1.13.7.tar.gz
    tar -xvf nginx-1.13.7.tar.gz

3.安装nginx

    //进入nginx目录
    cd /usr/local/nginx
    //进入目录
    cd nginx-1.13.7
    //执行命令 考虑到后续安装ssl证书 添加两个模块
    ./configure --with-http_stub_status_module --with-http_ssl_module
    //执行make命令
    make
    //执行make install命令
    make install

4.启动nginx服务

 /usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf

4.配置nginx.conf

    # 打开配置文件
    vi /usr/local/nginx/conf/nginx.conf

将端口号改成8089(随便挑个端口)，因为可能apeache占用80端口，apeache端口尽量不要修改，我们选择修改nginx端口。

将localhost修改为你服务器的公网ip地址。

5.重启nginx

/usr/local/nginx/sbin/nginx -s reload

 

查看nginx进程是否启动：

ps -ef | grep nginx

6.若想使用外部主机访问nginx，需要关闭服务器防火墙或开放nginx服务端口，端口为上一步nginx.conf的配置端口：

centOS6及以前版本使用命令： systemctl stop iptables.service

centOS7关闭防火墙命令： systemctl stop firewalld.service

关闭防火墙会导致服务器有一定风险，所以建议是单独开放服务端口 ：

开放80端口：

firewall-cmd --zone=public --add-port=80/tcp --permanent

查询端口号80 是否开启：

firewall-cmd --query-port=80/tcp

重启防火墙：

firewall-cmd --reload


随后访问该ip:端口 即可看到nginx界面。

7.访问服务器ip查看（备注，由于我监听的仍是80端口，所以ip后面的端口号被省略）

安装完成一般常用命令

进入安装目录中，

命令： cd /usr/local/nginx/sbin

启动，关闭，重启，命令：

./nginx 启动

./nginx -s stop 关闭

./nginx -s reload 重启



# vue项目部署404

vue项目使用 history路由模式，打包部署后，访问出现404问题

## 方式一

需要在nginx配置中加访问路径的重定向

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

宝塔面板的nginx配置文件路径 /www/server/panel/vhost/nginx

```nginx
    listen 80;
    server_name h5.abaqaq.com;
    index index.php index.html index.htm default.php default.htm default.html;
    root /www/wwwroot/h5;
    try_files $uri $uri/ /index.html;
```

## 方式二

或者在宝塔网站伪静态设置里添加此配置

```nginx
location / {
  if (!-e $request_filename) {
    rewrite  ^(.*)$ /index.html?s=/$1  last;
    break;
  }
}
```

## vue路由模式

hash模式

    使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载，其显示的网路路径中会有 “#” 号，有一点点丑。这是最安全的模式，因为他兼容所有的浏览器和服务器。

history模式

    美化后的hash模式，会去掉路径中的 “#”。依赖于Html5 的history，pushState API,所以要担心IE9以及一下的版本，感觉不用担心。并且还包括forward、back、go三个方法，对应浏览器的前进，后退，跳转操作。就是浏览器左上角的前进、后退等按钮进行的操作。