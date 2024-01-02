---
sidebar: auto
---

# Linux常用命令

## 文件管理

### 目录操作

切换目录 `cd`

查看目录 `ls`

- `-l`  列出文件详细信息 或者直接`ll`
- `-a`  列出当前目录下所有文件及目录，包括隐藏的a(all)

创建目录 `mkdir`

- -p    创建目录，若无父目录，则创建p(parent)

输出信息 `echo`

打印文件到命令行(查看文件) `cat`

改变文件所属用户 `chown`

改变文件所属组 `chgrp`

下载文件 `wget`

在文本文件中查找某个字符串 `grep`

统计文本中行数、字数、字符数 `wc`

部分显示 `more/less`

查找文件 `find / -name 'auto.cnf'`

创建空文件 `touch`

复制文件 `cp`

移动或重命名 `mv`

删除文件 `rm`

- -r   递归删除，可删除子目录及文件
- -f   强制删除

删除空目录 `rmdir`

树形结构显示目录，需要安装tree包  `tree`

显示当前目录 `pwd`

创建链接文件 `ln`

分页显示文本文件内容 `more、less`

显示文件头、尾内容  `head、tail`

### vim操作

进入编辑器 `vi/vim`，vim三种模式：命令模式、插入模式、编辑模式。使用ESC或i或：来切换模式。

- 进入编辑模式插入 `i`
- 退出编辑模式 `esc`
- 保存:后面输入`w`
- 退出:后面输入`q`
- 不保存退出:后面输入`q!`
- 显示行号 `set number`
- 查找关键字 `/xxxx` 按n跳到下一个，shift+n上一个
- 复制光标所在行，并粘贴 `yyp`
- h(左移一个字符←)、j(下一行↓)、k(上一行↑)、l(右移一个字符→)

### 打包压缩相关命令

打包压缩 `tar\gzip\bzip2`

- `-c`归档文件
- `-x`  压缩文件
- `-z` gzip压缩文件
- `-j` bzip2压缩文件
- `-v` 显示压缩或解压缩过程 v(view)
- `-f` 使用档名

例：

只打包，不压缩:`tar -cvf /home/abc.tar /home/abc`

打包，并用gzip压缩:`tar -zcvf /home/abc.tar.gz /home/abc`

打包，并用bzip2压缩:`tar -jcvf /home/abc.tar.bz2 /home/abc`

如果想解压缩，就直接替换上面的命令` tar -cvf / tar -zcvf / tar -jcvf` 中的“c” 换成“x” 就可以了。

### Linux管道

将一个命令的标准输出作为另一个命令的标准输入。也就是把几个命令组合起来使用，后一个命令除以前一个命令的结果。

例：grep -r "close" /home/* | more   在home目录下所有文件中查找，包括close的文件，并分页输出。

## 文件权限管理

### 三种基本权限

R：读，数值表示为 4

W：写，数值表示为 2

X：可执行，数值表示为1

```
[root@VM-16-2-centos ~]# ll
total 597952
-rw------- 1 root root  12387614 Aug 29  2021 apache-zookeeper-3.7.0-bin.tar.gz
-rw-r--r-- 1 root root 113304268 May  3 12:22 jdk-8u281-linux-x64.rpm
```

如上所示，`jdk-8u281-linux-x64.rpm`文件的权限为`-rw-r--r--`，一共十个字符，分成四段。

- 第一个字符“-”表示普通文件；这个位置还可能会出现`l`链接；`d`表示目录
- 第二三四个字符`rw-`表示当前所属用户的权限，所以用数值表示为 4+2=6
- 第五六七个字符`r--`表示当前所属组的权限，所以用数值表示为 4
- 第八九十个字符`r--`表示其他用户权限，所以用数值表示为 4

所以操作此文件的权限用数值表示为 644

### 更改权限

更改权限：`sudo chmod` [u所属用户  g所属组  o其他用户  a所有用户]  [+增加权限  -减少权限]  [r  w  x]  目录名

例如：有一个文件 filename，权限为`-rw-r----x` ,将权限值改为`-rwxrw-r-x`，用数值表示为765

```
sudo chmod u+x g+w o+r  filename` 也可以用数值表示 `sudo chmod 765 filename
```

## 运行程序

### 命令行运行

运行`./filename`

退出`ctrl+c`

### 后台运行

运行 `nohup command >out.file 2>&1 &`

退出 `ps -ef |grep 关键字 |awk '{print $2}'|xarg kill -9`

### 服务方式运行

设置开机启动 `systemctl enable`

启动`systemctl start`

关闭`systemctl stop`

## 系统相关

### 系统管理命令

显示指定文件的详细信息，比ls更详细 `stat`

显示在线登陆用户 `who`

显示当前操作用户`whoami`

显示主机名`hostname`

显示系统信息`uname`

动态显示当前耗费资源最多进程信息`top`

显示瞬间进程状态  `ps \ ps -aux`

查看目录大小 `du -h /home` (带有单位显示目录信息)

查看磁盘大小 `df -h` (带有单位显示磁盘信息)

查看网络情况 `ifconfig`

测试网络连通 `ping`

显示网络状态信息 `netstat`

命令不会用了，看文档 如：`man grep`

```
[root@VM-16-2-centos ~]# man grep
GREP(1)                    General Commands Manual                       GREP(1)
NAME
       grep, egrep, fgrep - print lines matching a pattern

SYNOPSIS
       grep [OPTIONS] PATTERN [FILE...]
       grep [OPTIONS] [-e PATTERN | -f FILE] [FILE...]
……
```

清屏 `clear`

对命令重命名 `alias` ，如：`alias showmeit="ps -aux"` ，解除使用`unaliax showmeit`

杀死进程 `kill`，可以先用`ps` 或 `top`命令查看进程的id，然后再用kill命令杀死进程。`kill -9` 强制删除

### 防火墙

查看防火墙状态 `firewall-cmd --state`

停止防火墙 `systemctl stop firewalld.service`

禁止firewall开机启动 `systemctl disable firewalld.service`

### 关机和重启

关机 `shutdown -h now`

- -r 关机重启
- -h 关机不重启
- now 立刻关机

重启 `reboot`

关机  `halt`

### 网络配置

查看网卡信息 `ifconfig`

网络配置 `/etc/sysconfig/network-script/ifcfg-eth0`

配置网卡 `/etc/udev/rules.d/70-persistent-net.rules`

## 用户管理

创建用户 `useradd`

设置密码 `passwd`

- 存储组账号 `/etc/group`
- 系统用户配置文件` /etc/passwd`

存储用户账号的密码 `/etc/shadow`

存储用户组账号的密码`/etc/gshadow`

用户名`useradd`

用户名`userdel`

用户名`adduser`

组名`groupadd`

组名`groupdel`

给root设置密码`passwd root`

```
su root
su - root
```

系统环境变量`/etc/profile`

用户环境变量`bash_profile`

用户环境变量`.bashrc`

`su user` 切换用户，加载配置文件.bashrc

`su - user` 切换用户，加载配置文件/etc/profile ，加载bash_profile

<!-- **更改文件的用户及用户组** -->

```
sudo chown [-R] owner[:group] {File|Directory}
-rw-r--r-- 1 root root 113304268 May  3 12:22 jdk-8u281-linux-x64.rpm
```

例如：还以 `jdk-8u281-linux-x64.rpm` 为例。属于用户root，组root

要想切换此文件所属的用户及组。可以使用命令。

```
sudo chown daley:java jdk-8u281-linux-x64.rpm
```


## 安装软件

### 下载rpm安装包方式

安装 `rpm -i jdk-XXX_linux-x64_bin.rpm`

查找 `rpm -qa | grep jdk`

列表 `rpm -qa | more`

> ubuntu dpkg 方式
>
> 查找dpkg -I | grep jdk
>
> 列表dpkg -I | more
>
> 安装dpkg -i jdk-XXX_linux-x64_bin.deb

### yum方式

搜索 `yum search jdk`

安装 `yum install java-11-openjdk.x86_64`

删除 `yum erase java-11 -openjdk.x86 64`

配置文件 `/etc/yum.repos.d/CentOS-Base.repo`

> ubuntu apt-get 方式
>
> 搜索 apt・cache search jdk
>
> 安装apt-get install openjdk-9-jdk
>
> 删除apt-get purge openjdk-9-jdk
>
> 配置文件/etc/apt/sources. Iist

### 下载压缩文件方式

编辑 .bashrc

环境变量配置

- 打开环境变量文件 `vi /etc/profile`
- 配置环境变量 `export JAVA_HOME=/root/j d k-XXX_lin ux-x64`
- `export PATH=$JAVA HOME/bin:$PATH`
- 刷新配置 `source /etc/profile`

