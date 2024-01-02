<template><div><h1 id="网络基础" tabindex="-1"><a class="header-anchor" href="#网络基础" aria-hidden="true">#</a> 网络基础</h1>
<h2 id="网站url路径中-符号" tabindex="-1"><a class="header-anchor" href="#网站url路径中-符号" aria-hidden="true">#</a> 网站URL路径中 # ？&amp;符号</h2>
<p><code v-pre>#</code></p>
<ul>
<li>位置标识符</li>
<li>改变#号后内容，浏览器只会滚动到相应位置，不会重新加载网页（不会发请求）</li>
<li>改变#号后内容，会在浏览器的访问历史中新增一个记录，使用【后退】按钮，可回到上一个位置</li>
</ul>
<p><code v-pre>?</code></p>
<ul>
<li>
<p>连接作用</p>
</li>
<li>
<p>清除缓存</p>
<ul>
<li>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>http://www.xxxxx.com/index.html

http://www.xxxxx.com/index.html?test123123
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>两个URL打开页面一样，但带有问号的网址说明不调用缓存的内容，而认为是一个新地址</p>
</li>
</ul>
</li>
</ul>
<p><code v-pre>&amp;</code></p>
<ul>
<li>不同参数的分隔符</li>
</ul>
</div></template>


