<template><div><h1 id="linux安装nginx" tabindex="-1"><a class="header-anchor" href="#linux安装nginx" aria-hidden="true">#</a> LINUX安装nginx</h1>
<p>1.安装依赖包</p>
<pre><code>//一键安装上面四个依赖
yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
</code></pre>
<p>2.下载并解压安装包</p>
<pre><code>//创建一个文件夹
cd /usr/local
mkdir nginx
cd nginx
//下载tar包
wget http://nginx.org/download/nginx-1.13.7.tar.gz
tar -xvf nginx-1.13.7.tar.gz
</code></pre>
<p>3.安装nginx</p>
<pre><code>//进入nginx目录
cd /usr/local/nginx
//进入目录
cd nginx-1.13.7
//执行命令 考虑到后续安装ssl证书 添加两个模块
./configure --with-http_stub_status_module --with-http_ssl_module
//执行make命令
make
//执行make install命令
make install
</code></pre>
<p>4.启动nginx服务</p>
<p>/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf</p>
<p>4.配置nginx.conf</p>
<pre><code># 打开配置文件
vi /usr/local/nginx/conf/nginx.conf
</code></pre>
<p>将端口号改成8089(随便挑个端口)，因为可能apeache占用80端口，apeache端口尽量不要修改，我们选择修改nginx端口。</p>
<p>将localhost修改为你服务器的公网ip地址。</p>
<p>5.重启nginx</p>
<p>/usr/local/nginx/sbin/nginx -s reload</p>
<p>查看nginx进程是否启动：</p>
<p>ps -ef | grep nginx</p>
<p>6.若想使用外部主机访问nginx，需要关闭服务器防火墙或开放nginx服务端口，端口为上一步nginx.conf的配置端口：</p>
<p>centOS6及以前版本使用命令： systemctl stop iptables.service</p>
<p>centOS7关闭防火墙命令： systemctl stop firewalld.service</p>
<p>关闭防火墙会导致服务器有一定风险，所以建议是单独开放服务端口 ：</p>
<p>开放80端口：</p>
<p>firewall-cmd --zone=public --add-port=80/tcp --permanent</p>
<p>查询端口号80 是否开启：</p>
<p>firewall-cmd --query-port=80/tcp</p>
<p>重启防火墙：</p>
<p>firewall-cmd --reload</p>
<p>随后访问该ip:端口 即可看到nginx界面。</p>
<p>7.访问服务器ip查看（备注，由于我监听的仍是80端口，所以ip后面的端口号被省略）</p>
<p>安装完成一般常用命令</p>
<p>进入安装目录中，</p>
<p>命令： cd /usr/local/nginx/sbin</p>
<p>启动，关闭，重启，命令：</p>
<p>./nginx 启动</p>
<p>./nginx -s stop 关闭</p>
<p>./nginx -s reload 重启</p>
<h1 id="vue项目部署404" tabindex="-1"><a class="header-anchor" href="#vue项目部署404" aria-hidden="true">#</a> vue项目部署404</h1>
<p>vue项目使用 history路由模式，打包部署后，访问出现404问题</p>
<h2 id="方式一" tabindex="-1"><a class="header-anchor" href="#方式一" aria-hidden="true">#</a> 方式一</h2>
<p>需要在nginx配置中加访问路径的重定向</p>
<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>宝塔面板的nginx配置文件路径 /www/server/panel/vhost/nginx</p>
<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre v-pre class="language-nginx"><code>    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> h5.abaqaq.com</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span> index.php index.html index.htm default.php default.htm default.html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">root</span> /www/wwwroot/h5</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ /index.html</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方式二" tabindex="-1"><a class="header-anchor" href="#方式二" aria-hidden="true">#</a> 方式二</h2>
<p>或者在宝塔网站伪静态设置里添加此配置</p>
<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre v-pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">if</span> (!-e <span class="token variable">$request_filename</span>)</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">rewrite</span>  ^(.*)$ /index.html?s=/<span class="token variable">$1</span>  last</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">break</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue路由模式" tabindex="-1"><a class="header-anchor" href="#vue路由模式" aria-hidden="true">#</a> vue路由模式</h2>
<p>hash模式</p>
<pre><code>使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载，其显示的网路路径中会有 “#” 号，有一点点丑。这是最安全的模式，因为他兼容所有的浏览器和服务器。
</code></pre>
<p>history模式</p>
<pre><code>美化后的hash模式，会去掉路径中的 “#”。依赖于Html5 的history，pushState API,所以要担心IE9以及一下的版本，感觉不用担心。并且还包括forward、back、go三个方法，对应浏览器的前进，后退，跳转操作。就是浏览器左上角的前进、后退等按钮进行的操作。
</code></pre>
</div></template>


