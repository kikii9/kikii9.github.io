<template><div><h1 id="linux常用命令" tabindex="-1"><a class="header-anchor" href="#linux常用命令" aria-hidden="true">#</a> Linux常用命令</h1>
<h2 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理" aria-hidden="true">#</a> 文件管理</h2>
<h3 id="目录操作" tabindex="-1"><a class="header-anchor" href="#目录操作" aria-hidden="true">#</a> 目录操作</h3>
<p>切换目录 <code v-pre>cd</code></p>
<p>查看目录 <code v-pre>ls</code></p>
<ul>
<li><code v-pre>-l</code>  列出文件详细信息 或者直接<code v-pre>ll</code></li>
<li><code v-pre>-a</code>  列出当前目录下所有文件及目录，包括隐藏的a(all)</li>
</ul>
<p>创建目录 <code v-pre>mkdir</code></p>
<ul>
<li>-p    创建目录，若无父目录，则创建p(parent)</li>
</ul>
<p>输出信息 <code v-pre>echo</code></p>
<p>打印文件到命令行(查看文件) <code v-pre>cat</code></p>
<p>改变文件所属用户 <code v-pre>chown</code></p>
<p>改变文件所属组 <code v-pre>chgrp</code></p>
<p>下载文件 <code v-pre>wget</code></p>
<p>在文本文件中查找某个字符串 <code v-pre>grep</code></p>
<p>统计文本中行数、字数、字符数 <code v-pre>wc</code></p>
<p>部分显示 <code v-pre>more/less</code></p>
<p>查找文件 <code v-pre>find / -name 'auto.cnf'</code></p>
<p>创建空文件 <code v-pre>touch</code></p>
<p>复制文件 <code v-pre>cp</code></p>
<p>移动或重命名 <code v-pre>mv</code></p>
<p>删除文件 <code v-pre>rm</code></p>
<ul>
<li>-r   递归删除，可删除子目录及文件</li>
<li>-f   强制删除</li>
</ul>
<p>删除空目录 <code v-pre>rmdir</code></p>
<p>树形结构显示目录，需要安装tree包  <code v-pre>tree</code></p>
<p>显示当前目录 <code v-pre>pwd</code></p>
<p>创建链接文件 <code v-pre>ln</code></p>
<p>分页显示文本文件内容 <code v-pre>more、less</code></p>
<p>显示文件头、尾内容  <code v-pre>head、tail</code></p>
<h3 id="vim操作" tabindex="-1"><a class="header-anchor" href="#vim操作" aria-hidden="true">#</a> vim操作</h3>
<p>进入编辑器 <code v-pre>vi/vim</code>，vim三种模式：命令模式、插入模式、编辑模式。使用ESC或i或：来切换模式。</p>
<ul>
<li>进入编辑模式插入 <code v-pre>i</code></li>
<li>退出编辑模式 <code v-pre>esc</code></li>
<li>保存:后面输入<code v-pre>w</code></li>
<li>退出:后面输入<code v-pre>q</code></li>
<li>不保存退出:后面输入<code v-pre>q!</code></li>
<li>显示行号 <code v-pre>set number</code></li>
<li>查找关键字 <code v-pre>/xxxx</code> 按n跳到下一个，shift+n上一个</li>
<li>复制光标所在行，并粘贴 <code v-pre>yyp</code></li>
<li>h(左移一个字符←)、j(下一行↓)、k(上一行↑)、l(右移一个字符→)</li>
</ul>
<h3 id="打包压缩相关命令" tabindex="-1"><a class="header-anchor" href="#打包压缩相关命令" aria-hidden="true">#</a> 打包压缩相关命令</h3>
<p>打包压缩 <code v-pre>tar\gzip\bzip2</code></p>
<ul>
<li><code v-pre>-c</code>归档文件</li>
<li><code v-pre>-x</code>  压缩文件</li>
<li><code v-pre>-z</code> gzip压缩文件</li>
<li><code v-pre>-j</code> bzip2压缩文件</li>
<li><code v-pre>-v</code> 显示压缩或解压缩过程 v(view)</li>
<li><code v-pre>-f</code> 使用档名</li>
</ul>
<p>例：</p>
<p>只打包，不压缩:<code v-pre>tar -cvf /home/abc.tar /home/abc</code></p>
<p>打包，并用gzip压缩:<code v-pre>tar -zcvf /home/abc.tar.gz /home/abc</code></p>
<p>打包，并用bzip2压缩:<code v-pre>tar -jcvf /home/abc.tar.bz2 /home/abc</code></p>
<p>如果想解压缩，就直接替换上面的命令<code v-pre> tar -cvf / tar -zcvf / tar -jcvf</code> 中的“c” 换成“x” 就可以了。</p>
<h3 id="linux管道" tabindex="-1"><a class="header-anchor" href="#linux管道" aria-hidden="true">#</a> Linux管道</h3>
<p>将一个命令的标准输出作为另一个命令的标准输入。也就是把几个命令组合起来使用，后一个命令除以前一个命令的结果。</p>
<p>例：grep -r &quot;close&quot; /home/* | more   在home目录下所有文件中查找，包括close的文件，并分页输出。</p>
<h2 id="文件权限管理" tabindex="-1"><a class="header-anchor" href="#文件权限管理" aria-hidden="true">#</a> 文件权限管理</h2>
<h3 id="三种基本权限" tabindex="-1"><a class="header-anchor" href="#三种基本权限" aria-hidden="true">#</a> 三种基本权限</h3>
<p>R：读，数值表示为 4</p>
<p>W：写，数值表示为 2</p>
<p>X：可执行，数值表示为1</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[root@VM-16-2-centos ~]# ll
total 597952
-rw------- 1 root root  12387614 Aug 29  2021 apache-zookeeper-3.7.0-bin.tar.gz
-rw-r--r-- 1 root root 113304268 May  3 12:22 jdk-8u281-linux-x64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所示，<code v-pre>jdk-8u281-linux-x64.rpm</code>文件的权限为<code v-pre>-rw-r--r--</code>，一共十个字符，分成四段。</p>
<ul>
<li>第一个字符“-”表示普通文件；这个位置还可能会出现<code v-pre>l</code>链接；<code v-pre>d</code>表示目录</li>
<li>第二三四个字符<code v-pre>rw-</code>表示当前所属用户的权限，所以用数值表示为 4+2=6</li>
<li>第五六七个字符<code v-pre>r--</code>表示当前所属组的权限，所以用数值表示为 4</li>
<li>第八九十个字符<code v-pre>r--</code>表示其他用户权限，所以用数值表示为 4</li>
</ul>
<p>所以操作此文件的权限用数值表示为 644</p>
<h3 id="更改权限" tabindex="-1"><a class="header-anchor" href="#更改权限" aria-hidden="true">#</a> 更改权限</h3>
<p>更改权限：<code v-pre>sudo chmod</code> [u所属用户  g所属组  o其他用户  a所有用户]  [+增加权限  -减少权限]  [r  w  x]  目录名</p>
<p>例如：有一个文件 filename，权限为<code v-pre>-rw-r----x</code> ,将权限值改为<code v-pre>-rwxrw-r-x</code>，用数值表示为765</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo chmod u+x g+w o+r  filename` 也可以用数值表示 `sudo chmod 765 filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="运行程序" tabindex="-1"><a class="header-anchor" href="#运行程序" aria-hidden="true">#</a> 运行程序</h2>
<h3 id="命令行运行" tabindex="-1"><a class="header-anchor" href="#命令行运行" aria-hidden="true">#</a> 命令行运行</h3>
<p>运行<code v-pre>./filename</code></p>
<p>退出<code v-pre>ctrl+c</code></p>
<h3 id="后台运行" tabindex="-1"><a class="header-anchor" href="#后台运行" aria-hidden="true">#</a> 后台运行</h3>
<p>运行 <code v-pre>nohup command &gt;out.file 2&gt;&amp;1 &amp;</code></p>
<p>退出 <code v-pre>ps -ef |grep 关键字 |awk '{print $2}'|xarg kill -9</code></p>
<h3 id="服务方式运行" tabindex="-1"><a class="header-anchor" href="#服务方式运行" aria-hidden="true">#</a> 服务方式运行</h3>
<p>设置开机启动 <code v-pre>systemctl enable</code></p>
<p>启动<code v-pre>systemctl start</code></p>
<p>关闭<code v-pre>systemctl stop</code></p>
<h2 id="系统相关" tabindex="-1"><a class="header-anchor" href="#系统相关" aria-hidden="true">#</a> 系统相关</h2>
<h3 id="系统管理命令" tabindex="-1"><a class="header-anchor" href="#系统管理命令" aria-hidden="true">#</a> 系统管理命令</h3>
<p>显示指定文件的详细信息，比ls更详细 <code v-pre>stat</code></p>
<p>显示在线登陆用户 <code v-pre>who</code></p>
<p>显示当前操作用户<code v-pre>whoami</code></p>
<p>显示主机名<code v-pre>hostname</code></p>
<p>显示系统信息<code v-pre>uname</code></p>
<p>动态显示当前耗费资源最多进程信息<code v-pre>top</code></p>
<p>显示瞬间进程状态  <code v-pre>ps \ ps -aux</code></p>
<p>查看目录大小 <code v-pre>du -h /home</code> (带有单位显示目录信息)</p>
<p>查看磁盘大小 <code v-pre>df -h</code> (带有单位显示磁盘信息)</p>
<p>查看网络情况 <code v-pre>ifconfig</code></p>
<p>测试网络连通 <code v-pre>ping</code></p>
<p>显示网络状态信息 <code v-pre>netstat</code></p>
<p>命令不会用了，看文档 如：<code v-pre>man grep</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[root@VM-16-2-centos ~]# man grep
GREP(1)                    General Commands Manual                       GREP(1)
NAME
       grep, egrep, fgrep - print lines matching a pattern

SYNOPSIS
       grep [OPTIONS] PATTERN [FILE...]
       grep [OPTIONS] [-e PATTERN | -f FILE] [FILE...]
……
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>清屏 <code v-pre>clear</code></p>
<p>对命令重命名 <code v-pre>alias</code> ，如：<code v-pre>alias showmeit=&quot;ps -aux&quot;</code> ，解除使用<code v-pre>unaliax showmeit</code></p>
<p>杀死进程 <code v-pre>kill</code>，可以先用<code v-pre>ps</code> 或 <code v-pre>top</code>命令查看进程的id，然后再用kill命令杀死进程。<code v-pre>kill -9</code> 强制删除</p>
<h3 id="防火墙" tabindex="-1"><a class="header-anchor" href="#防火墙" aria-hidden="true">#</a> 防火墙</h3>
<p>查看防火墙状态 <code v-pre>firewall-cmd --state</code></p>
<p>停止防火墙 <code v-pre>systemctl stop firewalld.service</code></p>
<p>禁止firewall开机启动 <code v-pre>systemctl disable firewalld.service</code></p>
<h3 id="关机和重启" tabindex="-1"><a class="header-anchor" href="#关机和重启" aria-hidden="true">#</a> 关机和重启</h3>
<p>关机 <code v-pre>shutdown -h now</code></p>
<ul>
<li>-r 关机重启</li>
<li>-h 关机不重启</li>
<li>now 立刻关机</li>
</ul>
<p>重启 <code v-pre>reboot</code></p>
<p>关机  <code v-pre>halt</code></p>
<h3 id="网络配置" tabindex="-1"><a class="header-anchor" href="#网络配置" aria-hidden="true">#</a> 网络配置</h3>
<p>查看网卡信息 <code v-pre>ifconfig</code></p>
<p>网络配置 <code v-pre>/etc/sysconfig/network-script/ifcfg-eth0</code></p>
<p>配置网卡 <code v-pre>/etc/udev/rules.d/70-persistent-net.rules</code></p>
<h2 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理" aria-hidden="true">#</a> 用户管理</h2>
<p>创建用户 <code v-pre>useradd</code></p>
<p>设置密码 <code v-pre>passwd</code></p>
<ul>
<li>存储组账号 <code v-pre>/etc/group</code></li>
<li>系统用户配置文件<code v-pre> /etc/passwd</code></li>
</ul>
<p>存储用户账号的密码 <code v-pre>/etc/shadow</code></p>
<p>存储用户组账号的密码<code v-pre>/etc/gshadow</code></p>
<p>用户名<code v-pre>useradd</code></p>
<p>用户名<code v-pre>userdel</code></p>
<p>用户名<code v-pre>adduser</code></p>
<p>组名<code v-pre>groupadd</code></p>
<p>组名<code v-pre>groupdel</code></p>
<p>给root设置密码<code v-pre>passwd root</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>su root
su - root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>系统环境变量<code v-pre>/etc/profile</code></p>
<p>用户环境变量<code v-pre>bash_profile</code></p>
<p>用户环境变量<code v-pre>.bashrc</code></p>
<p><code v-pre>su user</code> 切换用户，加载配置文件.bashrc</p>
<p><code v-pre>su - user</code> 切换用户，加载配置文件/etc/profile ，加载bash_profile</p>
<!-- **更改文件的用户及用户组** -->
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo chown [-R] owner[:group] {File|Directory}
-rw-r--r-- 1 root root 113304268 May  3 12:22 jdk-8u281-linux-x64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：还以 <code v-pre>jdk-8u281-linux-x64.rpm</code> 为例。属于用户root，组root</p>
<p>要想切换此文件所属的用户及组。可以使用命令。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>sudo chown daley:java jdk-8u281-linux-x64.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装软件" tabindex="-1"><a class="header-anchor" href="#安装软件" aria-hidden="true">#</a> 安装软件</h2>
<h3 id="下载rpm安装包方式" tabindex="-1"><a class="header-anchor" href="#下载rpm安装包方式" aria-hidden="true">#</a> 下载rpm安装包方式</h3>
<p>安装 <code v-pre>rpm -i jdk-XXX_linux-x64_bin.rpm</code></p>
<p>查找 <code v-pre>rpm -qa | grep jdk</code></p>
<p>列表 <code v-pre>rpm -qa | more</code></p>
<blockquote>
<p>ubuntu dpkg 方式</p>
<p>查找dpkg -I | grep jdk</p>
<p>列表dpkg -I | more</p>
<p>安装dpkg -i jdk-XXX_linux-x64_bin.deb</p>
</blockquote>
<h3 id="yum方式" tabindex="-1"><a class="header-anchor" href="#yum方式" aria-hidden="true">#</a> yum方式</h3>
<p>搜索 <code v-pre>yum search jdk</code></p>
<p>安装 <code v-pre>yum install java-11-openjdk.x86_64</code></p>
<p>删除 <code v-pre>yum erase java-11 -openjdk.x86 64</code></p>
<p>配置文件 <code v-pre>/etc/yum.repos.d/CentOS-Base.repo</code></p>
<blockquote>
<p>ubuntu apt-get 方式</p>
<p>搜索 apt・cache search jdk</p>
<p>安装apt-get install openjdk-9-jdk</p>
<p>删除apt-get purge openjdk-9-jdk</p>
<p>配置文件/etc/apt/sources. Iist</p>
</blockquote>
<h3 id="下载压缩文件方式" tabindex="-1"><a class="header-anchor" href="#下载压缩文件方式" aria-hidden="true">#</a> 下载压缩文件方式</h3>
<p>编辑 .bashrc</p>
<p>环境变量配置</p>
<ul>
<li>打开环境变量文件 <code v-pre>vi /etc/profile</code></li>
<li>配置环境变量 <code v-pre>export JAVA_HOME=/root/j d k-XXX_lin ux-x64</code></li>
<li><code v-pre>export PATH=$JAVA HOME/bin:$PATH</code></li>
<li>刷新配置 <code v-pre>source /etc/profile</code></li>
</ul>
</div></template>


