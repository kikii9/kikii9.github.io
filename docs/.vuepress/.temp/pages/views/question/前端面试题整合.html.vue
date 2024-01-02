<template><div><h1 id="前端面试题整合" tabindex="-1"><a class="header-anchor" href="#前端面试题整合" aria-hidden="true">#</a> 前端面试题整合</h1>
<h2 id="一、html" tabindex="-1"><a class="header-anchor" href="#一、html" aria-hidden="true">#</a> 一、html</h2>
<h3 id="行内外空元素" tabindex="-1"><a class="header-anchor" href="#行内外空元素" aria-hidden="true">#</a> 行内外空元素</h3>
<p>行内元素: a/img/span/b/strong/input/select/section</p>
<p>块级元素: div/p/table/ul/li/h1-h6</p>
<p>空元素: br/hr/img/input/link/meta</p>
<h3 id="浏览器内核" tabindex="-1"><a class="header-anchor" href="#浏览器内核" aria-hidden="true">#</a> 浏览器内核</h3>
<p>Trident： IE，360，搜狗</p>
<p>Gecko： Firefox</p>
<p>Presto： 旧Opera</p>
<p>Webkit： Safari，旧Chrome</p>
<p>Blink： Chrome，Opera</p>
<h3 id="浏览器存储" tabindex="-1"><a class="header-anchor" href="#浏览器存储" aria-hidden="true">#</a> 浏览器存储</h3>
<p>cookie： 一般表示用户状态的数据，大小为4KB，Cookies的数据始终在同源的http请求中携带,会在浏览器和服务器中来回传递。</p>
<p>sessionStorage：关闭浏览器后就销毁，大小一般都是：5MB，把数据存储在本地。</p>
<p>localStorage：永久保存，大小一般都是：5MB，把数据存储在本地。</p>
<h3 id="html新特性" tabindex="-1"><a class="header-anchor" href="#html新特性" aria-hidden="true">#</a> html新特性</h3>
<p>加入了canvas绘图和SVG绘图，加入了video和audio标签。</p>
<p>语义化标签：header、nav、footer</p>
<p>本地存储：sessionStorage，sessionStorage</p>
<h3 id="html语义化" tabindex="-1"><a class="header-anchor" href="#html语义化" aria-hidden="true">#</a> html语义化</h3>
<p>用正确的标签做正确的事情，html语义化让页面的内容结构更加简单易懂，</p>
<p>便于搜索引擎解析，便于阅读维护和理解。</p>
<h3 id="img的title和alt有什么区别" tabindex="-1"><a class="header-anchor" href="#img的title和alt有什么区别" aria-hidden="true">#</a> img的title和alt有什么区别?</h3>
<p>title是当鼠标划到图片元素时显示的图片描述</p>
<p>alt是img的特有属性，是图片内容的等价描述，用于图片无法加载时显示</p>
<h3 id="web标准-w3c标准是什么" tabindex="-1"><a class="header-anchor" href="#web标准-w3c标准是什么" aria-hidden="true">#</a> Web标准，w3c标准是什么？</h3>
<p>标签闭合、标签小写、不乱嵌套，使用外链css和js、结构行为表现的分离。</p>
<h2 id="二、css" tabindex="-1"><a class="header-anchor" href="#二、css" aria-hidden="true">#</a> 二、css</h2>
<h3 id="浏览器盒模型" tabindex="-1"><a class="header-anchor" href="#浏览器盒模型" aria-hidden="true">#</a> 浏览器盒模型?</h3>
<p>W3C: 宽度/padding/border/margin都是单独分开的</p>
<p>IE盒模型: 宽度 = 内容宽度+padding+border 是一起的</p>
<h3 id="清除浮动的方式" tabindex="-1"><a class="header-anchor" href="#清除浮动的方式" aria-hidden="true">#</a> 清除浮动的方式</h3>
<p>1.在子元素并级后面添加一个新元素，添加clear：both属性</p>
<p>2.给父元素添加overflow:hidden</p>
<p>3.通过给父级元素添加伪类after</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.clearfix:after</span><span class="token punctuation">{</span>
    <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span>0<span class="token punctuation">;</span>
    <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="css选择器" tabindex="-1"><a class="header-anchor" href="#css选择器" aria-hidden="true">#</a> CSS选择器</h3>
<p>ID选择器 (#ID)</p>
<p>Class选择器 (.class名)</p>
<p>标签选择器 (标签)</p>
<p>通配符 (*)</p>
<p>相邻选择器 (div+p)</p>
<p>子选择器 (div&gt;p)</p>
<p>后代选择器 (div p)</p>
<p>多个选择器 (div,p,a,ul)</p>
<p>伪类选择器 (a:hover)</p>
<h3 id="css样式优先级计算法" tabindex="-1"><a class="header-anchor" href="#css样式优先级计算法" aria-hidden="true">#</a> CSS样式优先级计算法:</h3>
<p>1/就近原则,后加样式优于前面的样式</p>
<p>2/内嵌样式&gt;内联样式&gt;外联样式</p>
<p>3/!Important 大于一切样式</p>
<h3 id="文本显示省略号" tabindex="-1"><a class="header-anchor" href="#文本显示省略号" aria-hidden="true">#</a> 文本显示省略号</h3>
<p>文本超出隐藏并显示省略号</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span> //文本超出显示省略
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文本只显示两行，第二行超出隐藏并显示省略号</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span> //将对象作为弹性伸缩盒子模型显示
  <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span> //用来限制在一个块元素显示的文本的行数
  <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span> //设置或检索伸缩盒对象的子元素的排列方式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="宽高计算" tabindex="-1"><a class="header-anchor" href="#宽高计算" aria-hidden="true">#</a> 宽高计算</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">width</span><span class="token punctuation">:</span><span class="token function">calc</span><span class="token punctuation">(</span>300px - 280px<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 280px<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flex布局" tabindex="-1"><a class="header-anchor" href="#flex布局" aria-hidden="true">#</a> flex布局</h3>
<p>flex水平垂直居中</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>align-content:flex-start （竖直方向对齐方式）</p>
<p>多个元素，竖直均匀分布</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-around<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>左边固定宽度，右边占满剩余部分</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
	<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
	<span class="token selector">.left</span><span class="token punctuation">{</span>
		<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">.rigth</span><span class="token punctuation">{</span>
		<span class="token comment">// width: 200px;</span>
		<span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
		<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
		<span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="grid布局" tabindex="-1"><a class="header-anchor" href="#grid布局" aria-hidden="true">#</a> grid布局</h3>
<p>居中</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导航目录自适应布局</p>
<p>每列宽度<code v-pre>100px</code>，然后自动填充</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
<span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
<span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fill<span class="token punctuation">,</span> 100rpx<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="水平垂直居中" tabindex="-1"><a class="header-anchor" href="#水平垂直居中" aria-hidden="true">#</a> 水平垂直居中</h3>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>  <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span> //子元素
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>  <span class="token property">position</span><span class="token punctuation">:</span>absolute<span class="token punctuation">;</span> //子元素
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元素旋转" tabindex="-1"><a class="header-anchor" href="#元素旋转" aria-hidden="true">#</a> 元素旋转</h3>
<p>旋转45度</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>45deg<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="响应式布局" tabindex="-1"><a class="header-anchor" href="#响应式布局" aria-hidden="true">#</a> 响应式布局</h3>
<p>1.媒体查询，@media可以根据不同的屏幕定义不同的样式。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>// 如果浏览器窗口小于 500px<span class="token punctuation">,</span> 背景将变为浅蓝色
<span class="token atrule"><span class="token rule">@media</span> <span class="token keyword">only</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.百分比布局</p>
<p>2.使用rem布局，vue中使用amfe-flexible和postcss-px2rem插件完成。</p>
<p>原生</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>        <span class="token comment">// 设置rem</span>
        <span class="token keyword">function</span> <span class="token function">watchWindowSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 设置字体大小 1px=0.01rem</span>
            <span class="token keyword">var</span> w <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">;</span>
            <span class="token keyword">var</span> h <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> h<span class="token punctuation">)</span>
            document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> w <span class="token operator">/</span> <span class="token number">19.2</span> <span class="token operator">+</span> <span class="token string">'px'</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 将事件侦听器函数附加到窗口的resize事件</span>
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"resize"</span><span class="token punctuation">,</span> watchWindowSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用该函数</span>
        <span class="token function">watchWindowSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h3>
<p>BFC即 Block Formatting Contexts ，块级格式化上下文</p>
<p>独立的渲染区域，内部元素的渲染不会影响外界。</p>
<p>形成BFC 条件</p>
<p>浮动元素   float属性不为none</p>
<p>定位---position: absolute，fixed</p>
<p>给元素添加display属性---display: inline-block, flex, inline-flex, table-cell，table-caption;
给元素添加overflow属性----overflow: hidden，auto，scroll(除了visible);</p>
<h2 id="三、js" tabindex="-1"><a class="header-anchor" href="#三、js" aria-hidden="true">#</a> 三、js</h2>
<h3 id="字符串方法" tabindex="-1"><a class="header-anchor" href="#字符串方法" aria-hidden="true">#</a> 字符串方法</h3>
<p>String
charAt  返回在指定位置的字符。
charCodeAt  返回在指定的位置的字符的 Unicode 编码。
IndexOf  	返回某个指定的字符串值在字符串中首次出现的位置。
slice  提取字符串的片断，并在新的字符串中返回被提取的部分。
split  把字符串分割为字符串数组。
toLowerCase  	把字符串转换为小写。
toUpperCase  把字符串转换为大写。
trim  去除字符串两边的空白</p>
<p>模板字符串</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">'张三'</span>
<span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">名字</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组方法" tabindex="-1"><a class="header-anchor" href="#数组方法" aria-hidden="true">#</a> 数组方法</h3>
<ul>
<li>
<p>join()</p>
<p>数组转字符串，参数为分隔符。返回字符串，原数组不变。</p>
</li>
<li>
<p>push()和pop()</p>
<p>向数组的末尾添加元素，返回数组长度，原数组改变。</p>
<p>删除数组的末尾元素，返回删除的元素，原数组改变</p>
</li>
<li>
<p>shift() 和 unshift()</p>
<p>删除数组的第一个元素，返回删除元素，原数组改变。</p>
<p>向数组的开头增加元素，返回数组长度，原数组改变。</p>
</li>
<li>
<p>sort()</p>
<p>对数组的元素进行排序，默认按照字符编码排序，参数为函数。返回新数组，原数组改变。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">-</span> b
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 升序排序</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>reverse()  反转数组的元素顺序。返回新数组，原数组改变。</p>
</li>
<li>
<p>concat() 合并数组，返回新数组，原数组不变。</p>
</li>
<li>
<p>slice() 数组截取</p>
<p>arrayObject.slice(start,end)，返回所选范围的元素的数组，原数组不变。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">// let arr1 = arr.slice(1,3) //从索引为1开始到索引为3之前结束</span>
    <span class="token comment">// let arr1 = arr.slice(2) //从索引为2开始全部</span>
    <span class="token comment">// let arr1 = arr.slice(-1)  // 从末尾元素开始选</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>splice() 删除或新增</p>
<p>arrayObject.splice(index,howmany,item1,.....,itemX)</p>
<p>从数组中添加或删除元素，返回被删除的元素数组，原数组改变</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'new'</span><span class="token punctuation">)</span> <span class="token comment">//从索引为1开始删除两个元素，并在该位置添加元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>indexOf()和 lastIndexOf()</p>
<p>返回参数在数组中的位置，原数组不变。</p>
<p>返回参数在数组中最后出现的位置，原数组不变。</p>
</li>
<li>
<p>includes() 判断一个数组是否包含一个指定的值。返回布尔值，原数组不变。</p>
</li>
<li>
<p>find()和findIndex()</p>
<p>返回数组中符合条件的第一个元素，参数为函数，原数组不变。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> e <span class="token operator">></span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回数组中符合条件的第一个元素的索引。</p>
</li>
<li>
<p>flat() 多维数组转一维数组，返回新数组，原数组不变。</p>
</li>
<li>
<p>forEach() 和map()</p>
<p>遍历数组，forEach没有返回，map返回新数组。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">// arr.forEach(e, i, arr => {</span>
    <span class="token comment">//     console.log(e, i, arr)</span>
    <span class="token comment">// });</span>
    <span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token parameter">arr</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> e <span class="token operator">=</span> e <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>filter()  返回数组中符合条件的全部元素，参数为函数，原数组不变。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token keyword">let</span> arr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> e <span class="token operator">></span> <span class="token number">3</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>every() 和 some()</p>
<p>every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true。</p>
<p>some()是对数组中每一项运行给定函数，如果该函数对任一项返回true,则返回true。</p>
</li>
</ul>
<h3 id="数组去重" tabindex="-1"><a class="header-anchor" href="#数组去重" aria-hidden="true">#</a> 数组去重</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 数组去重</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>

<span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> tmp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>tmp<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token operator">==</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      tmp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> tmp
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组排序" tabindex="-1"><a class="header-anchor" href="#数组排序" aria-hidden="true">#</a> 数组排序</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 数组排序</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">-</span> b
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="date时间对象" tabindex="-1"><a class="header-anchor" href="#date时间对象" aria-hidden="true">#</a> Date时间对象</h3>
<p>getFullYear  从 Date 对象以四位数字返回年份。
getMonth  从 Date 对象返回月份 (0 ~ 11)。
getDate  从 Date 对象返回一个月中的某一天 (1 ~ 31)。
getHours  返回 Date 对象的小时 (0 ~ 23)。	
getMinutes  	返回 Date 对象的分钟 (0 ~ 59)。
getSeconds  返回 Date 对象的秒数 (0 ~ 59)。
getDay  从 Date 对象返回一周中的某一天 (0 ~ 6)。
getTime  返回 1970 年 1 月 1 日至今的毫秒数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token keyword">let</span> time <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> year <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">getFullYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> mon <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">getMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token keyword">let</span> day <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> hou <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">getHours</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> min <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">getMinutes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> timeStr <span class="token operator">=</span> time<span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>year<span class="token punctuation">,</span> mon<span class="token punctuation">,</span> day<span class="token punctuation">,</span> hou<span class="token punctuation">,</span> min<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>timeStr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3>
<p>1.基本数据类型（栈）：Number，String，Boolean，Undefined，Null，Symbol(es6)</p>
<p>2.引用数据类型（堆）：Object,Array,Function , Date</p>
<p>JavaScript 里使用 typeof 来判断数据类型，只能区分基本类型</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 判断数据类型  Object.prototype.toString.call()</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//[object String]</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//[object Boolean]</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//[object Array]</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//[object Object]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="new操作符在创建实例的经历的阶段" tabindex="-1"><a class="header-anchor" href="#new操作符在创建实例的经历的阶段" aria-hidden="true">#</a> new操作符在创建实例的经历的阶段</h3>
<p>new创建了一个对象，共经历了4个阶段：</p>
<p>1.创建一个空对象</p>
<p>2.设置原型链</p>
<p>3.让实例化对象中的this指向对象，并执行函数体</p>
<p>4.返回创建的对象</p>
<h3 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h3>
<p>函数内部嵌套的函数</p>
<p>有权访问另一个函数作用域中的变量的函数。常见方式，就是在一个函数内部创建另一个函数。</p>
<p>功能：在函数外，访问函数内的变量。保持引用，不被回收。创建私有环境。</p>
<p>缺点：内存泄漏</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>        <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">11</span>
            <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">let</span> fn1 <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">fn1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="原型" tabindex="-1"><a class="header-anchor" href="#原型" aria-hidden="true">#</a> 原型</h3>
<p>1.每一个函数都有一个'prototype'属性,即显示原型。prototype(对象属性)的所有属性和方法，都会被构造函数的实例继承。</p>
<p>2.每一个实例对象都有一个'__ proto __ '属性，即隐式原型。</p>
<p>原型链</p>
<p>获取对象属性时，如果对象本身没有这个属性，就会去找这个对象'__ proto __ '属性指向上一个对象，一直找到最顶层(<code v-pre>Object.prototype</code>)为止。Object.prototype对象也有<strong>proto</strong>属性值为null</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 原型</span>
    <span class="token comment">// 获取原型的方法</span>
    <span class="token comment">// 1.对象的 '__proto__'</span>
    <span class="token comment">// 2.构造函数的prototype</span>

    <span class="token comment">// let cat = {</span>
    <span class="token comment">//     name: '喵喵'</span>
    <span class="token comment">// }</span>
    <span class="token comment">// cat.__proto__.eat = function () {</span>
    <span class="token comment">//     console.log('吃鱼')</span>
    <span class="token comment">// }</span>
    <span class="token comment">// cat.eat()</span>

    <span class="token comment">// function Cat(name, age) {</span>
    <span class="token comment">//     this.name = name</span>
    <span class="token comment">//     this.age = age</span>
    <span class="token comment">// }</span>

    <span class="token comment">// let cat = new Cat('喵喵', 2)</span>
    <span class="token comment">// Cat.prototype.eat = function () {</span>
    <span class="token comment">//     console.log('吃鱼')</span>
    <span class="token comment">// }</span>
    <span class="token comment">// console.log(cat)</span>
    <span class="token comment">// cat.eat()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 深拷贝浅拷贝</span>

    <span class="token comment">// Object.assign() 对象只有一层时是深拷贝</span>
    <span class="token comment">// let obj = {</span>
    <span class="token comment">//     name: '张三',</span>
    <span class="token comment">//     age: 18</span>
    <span class="token comment">// }</span>

    <span class="token comment">// let obj1 = Object.assign({}, obj)</span>
    <span class="token comment">// obj.age = 20</span>
    <span class="token comment">// console.log(obj)</span>
    <span class="token comment">// console.log(obj1)</span>

    <span class="token comment">// JSON.stringify 和 JSON.parse 实现深拷贝，但不能拷贝对象中的方法</span>
    <span class="token comment">// let obj = {</span>
    <span class="token comment">//     name: '张三',</span>
    <span class="token comment">//     age: 18,</span>
    <span class="token comment">//     like: {</span>
    <span class="token comment">//         a: 11,</span>
    <span class="token comment">//         b: 22</span>
    <span class="token comment">//     }</span>
    <span class="token comment">// }</span>
    <span class="token comment">// let str = JSON.stringify(obj)</span>
    <span class="token comment">// let obj1 = JSON.parse(str)</span>
    <span class="token comment">// obj.like.a = 10</span>
    <span class="token comment">// console.log(obj)</span>
    <span class="token comment">// console.log(obj1)</span>

    <span class="token comment">// 递归实现深拷贝</span>
    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
        <span class="token literal-property property">like</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
            <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">22</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">copy</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> newObj <span class="token operator">=</span> obj<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Array <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token keyword">instanceof</span><span class="token punctuation">(</span>Object <span class="token operator">||</span> Array<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                newObj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">copy</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                newObj<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> newObj
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token function">copy</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    obj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span>
    obj<span class="token punctuation">.</span>like<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">15</span>
    obj<span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es6" tabindex="-1"><a class="header-anchor" href="#es6" aria-hidden="true">#</a> ES6</h3>
<p>1.let 和const</p>
<p>var定义变量，会有变量声名提升，let不会。</p>
<p>var定义全局的变量，let和const定义块级的变量。</p>
<p>const定义常量。for循环用let。</p>
<p>2.模板字符串</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 模板字符串</span>
    <span class="token keyword">let</span> box <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'box'</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">'张三'</span>
    <span class="token keyword">let</span> age <span class="token operator">=</span> <span class="token string">'18'</span>
    <span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">"&lt;ul>&lt;li>"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"&lt;/li>&lt;/ul>"</span>
    <span class="token keyword">let</span> str1 <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;ul>&lt;li></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/li>&lt;/ul></span><span class="token template-punctuation string">`</span></span>
    box<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> str1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3..函数默认值</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 函数默认值</span>
    <span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">20</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a <span class="token operator">+</span> b
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">//30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数剩余参数</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 剩余参数 将多个参数合并为一个数组</span>

    <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.拓展运算符</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 拓展运算符 将数组分离为多项参数</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5.箭头函数</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 箭头函数</span>
    <span class="token keyword">let</span> <span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=></span> a <span class="token operator">+</span> b
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>箭头函数没有this指向</p>
<p>箭头函数不能使用new来实例化对象</p>
<p>this指向：</p>
<p>1.普通函数，this指向window</p>
<p>2.谁调用指向谁</p>
<p>3.call、apply、bind这三个方法将this指向绑定在传入的对象上</p>
<p>4.new实例化后指向实例对象</p>
<p>5.箭头函数 ，根据外层作用域来决定this</p>
<p>call，apply，bind的区别？</p>
<p>call和apply改变this指向，bind则是绑定this指向后返回新函数。</p>
<p>call和apply立即执行，bind需要调用才执行。</p>
<p>call如果传的多个参数，依次填，apply则是第二个参数是数组。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token keyword">let</span> boy <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小小'</span><span class="token punctuation">,</span>
        <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function">like</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'喜欢'</span> <span class="token operator">+</span> a <span class="token operator">+</span> <span class="token string">'和'</span> <span class="token operator">+</span> b<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">let</span> man <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'王大'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    boy<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    boy<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>man<span class="token punctuation">)</span>
    boy<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>man<span class="token punctuation">,</span> <span class="token string">'吃饭'</span><span class="token punctuation">,</span> <span class="token string">'唱歌'</span><span class="token punctuation">)</span>
    boy<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>man<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'睡觉'</span><span class="token punctuation">,</span> <span class="token string">'玩'</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">let</span> fn1 <span class="token operator">=</span> boy<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>man<span class="token punctuation">,</span> <span class="token string">'吃饭1'</span><span class="token punctuation">,</span> <span class="token string">'唱歌1'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.解构赋值</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 解构赋值 赋值运算符的拓展</span>
    <span class="token keyword">let</span> man <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>
        name<span class="token punctuation">,</span>
        age
    <span class="token punctuation">}</span> <span class="token operator">=</span> man
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> arr
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.对象的方法</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 对象的方法</span>

    <span class="token comment">// 1.'is()'  等价于 '==='  比较两个值相等否</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


    <span class="token comment">// 2. assign() 对象的合并</span>
    <span class="token comment">// Object.assign(obj, obj1, obj2) obj为目标对象</span>

    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>
    <span class="token punctuation">}</span>
    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8.set和map</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">// Set  Set允许你存储任何类型的唯一值，无论是原始值或者是对象引用。</span>
    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span>
    <span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
    set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
    set<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span>
    <span class="token keyword">let</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>set<span class="token punctuation">]</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span>

    <span class="token comment">// Set 是无重复值的有序列表,有点像数组。</span>
    <span class="token comment">// Map 是有序的键值对，其中的键允许是任何类型，有点像对象。</span>

    <span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'张三'</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h3>
<p>Promise 是异步编程的一种解决方案</p>
<p><code v-pre>Promise</code>对象是一个构造函数，用来生成<code v-pre>Promise</code>实例</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">// promise </span>
    <span class="token keyword">let</span> pro <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">,</span> rej</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> man <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span><span class="token punctuation">,</span>
            <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">'18'</span>
        <span class="token punctuation">}</span>
        <span class="token function">res</span><span class="token punctuation">(</span>man<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    pro<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// console.log(res)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// console.log(pro)</span>
    <span class="token keyword">let</span> pro1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res<span class="token punctuation">,</span> rej</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">res</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// console.log(pro1)</span>
    <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getdata</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">await</span> pro1
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">getdata</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问执行顺序，控制台依次打印？</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>			<span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">const</span> promise1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'3'</span><span class="token punctuation">)</span>
					<span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'4'</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span>
				<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'2'</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				promise1<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
				console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'5'</span><span class="token punctuation">)</span>
			<span class="token punctuation">}</span>
			
			<span class="token comment">// 31542</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>10.class类</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">// es6 类与继承</span>

    <span class="token keyword">class</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
        <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> cat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cat</span><span class="token punctuation">(</span><span class="token string">'大喵'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token class-name">Cat</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">like</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'猫喜欢睡觉'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    cat<span class="token punctuation">.</span><span class="token function">like</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Cat</span> <span class="token punctuation">{</span>
        <span class="token function">wang</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'旺旺'</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">let</span> wc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token string">'旺财'</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>wc<span class="token punctuation">)</span>
    wc<span class="token punctuation">.</span><span class="token function">wang</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 原型的继承</span>
	<span class="token comment">//有 A,B两个类，B要继承A，让B的prototype = A 的实例</span>
    <span class="token class-name">B</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http的状态码" tabindex="-1"><a class="header-anchor" href="#http的状态码" aria-hidden="true">#</a> http的状态码</h3>
<p>1XX：信息状态码</p>
<p>2XX：成功状态码</p>
<p>3XX：重定向</p>
<p>4XX：客户端错误</p>
<p>5XX：服务器错误</p>
<p>常见状态码：</p>
<p>304 自从上次请求后，请求的网页未修改过。</p>
<p>401 没有权限，请求要求身份验证。</p>
<p>403 服务器已经理解请求，但是拒绝执行它。</p>
<p>404 请求失败</p>
<p>500 服务器遇到一个未曾预料的情况，导致无法完成对请求的处理</p>
<p>503 由于请示服务器维护或者过载，服务器当前无法处理请求</p>
<h3 id="get与post的区别" tabindex="-1"><a class="header-anchor" href="#get与post的区别" aria-hidden="true">#</a> get与post的区别</h3>
<p>GET在浏览器回退时是无害的，而POST会再次提交请求</p>
<p>GET产生的URL地址可被Bookmark，而POST不可以</p>
<p>GET请求会被浏览器主动cache缓存，而POST不会，除非手动设置</p>
<p>GET请求只能进行url编码，而POST支持多种编码方式。</p>
<p>GET请求参数会被完整的保留在浏览器历史记录中，而POST中的参数不会被保留</p>
<p>GET请求在URL中传送的参数是有长度限制的，而POST没有</p>
<p>对参数的数据类型，GET只接受ASCII字符，而POST没有限制</p>
<p>GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息</p>
<p>GET参数通过URL传递，POST放在Request body中</p>
<h3 id="ajax的过程" tabindex="-1"><a class="header-anchor" href="#ajax的过程" aria-hidden="true">#</a> ajax的过程</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 1.创建xhr对象</span>
    <span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 2.设置请求方式</span>
    xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'method'</span><span class="token punctuation">,</span> <span class="token constant">URL</span><span class="token punctuation">,</span> async<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 3.设置回调函数</span>
    xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">!==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">>=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span> <span class="token operator">||</span> xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">304</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 4.发送请求</span>
    xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 5.结果处理</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="axios封装" tabindex="-1"><a class="header-anchor" href="#axios封装" aria-hidden="true">#</a> axios封装</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 创建axios实例</span>
<span class="token keyword">var</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 设置post请求头</span>
instance<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>post<span class="token punctuation">[</span><span class="token string">'Content-Type'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">'application/x-www-form-urlencoded'</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */</span> 
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>    
    <span class="token parameter">config</span> <span class="token operator">=></span> <span class="token punctuation">{</span>        
        <span class="token comment">// 登录流程控制中，根据本地是否存在token判断用户的登录情况        </span>
        <span class="token comment">// 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        </span>
        <span class="token comment">// 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        </span>
        <span class="token comment">// 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。        </span>
        <span class="token keyword">const</span> token <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>token<span class="token punctuation">;</span>        
        token <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> token<span class="token punctuation">)</span><span class="token punctuation">;</span>        
        <span class="token keyword">return</span> config<span class="token punctuation">;</span>    
    <span class="token punctuation">}</span><span class="token punctuation">,</span>    
    <span class="token parameter">error</span> <span class="token operator">=></span> Promise<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span>
 
<span class="token comment">// 响应拦截器</span>
instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>    
    <span class="token comment">// 请求成功</span>
    <span class="token parameter">res</span> <span class="token operator">=></span> res<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span> <span class="token operator">?</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">:</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">,</span>    
    <span class="token comment">// 请求失败</span>
    <span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> response <span class="token punctuation">}</span> <span class="token operator">=</span> error<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 请求已发出，但是不在2xx的范围 </span>
            <span class="token function">errorHandle</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status<span class="token punctuation">,</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 处理断网的情况</span>
            <span class="token comment">// eg:请求超时或断网时，更新state的network状态</span>
            <span class="token comment">// network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏</span>
            <span class="token comment">// 关于断网组件中的刷新重新获取数据，会在断网组件中说明</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>onLine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
               store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'changeNetwork'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token keyword">export</span> <span class="token keyword">default</span> instance<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、vue" tabindex="-1"><a class="header-anchor" href="#四、vue" aria-hidden="true">#</a> 四、vue</h2>
<h3 id="vue的指令" tabindex="-1"><a class="header-anchor" href="#vue的指令" aria-hidden="true">#</a> vue的指令</h3>
<p>v-text：把数据插入标签</p>
<p>v-html：把html插入标签</p>
<p>v-if：判断是否为真，然后重组、销毁DOM节点</p>
<p>v-for：数据循环</p>
<p>v-bind：class 绑定一个属性</p>
<p>v-model：实现双向绑定</p>
<p>v-on：添加事件</p>
<p>v-else：配合v-if使用</p>
<h3 id="v-show和v-if" tabindex="-1"><a class="header-anchor" href="#v-show和v-if" aria-hidden="true">#</a> v-show和v-if</h3>
<p>v-show指令是通过修改元素的display的CSS属性让其显示或隐藏</p>
<p>v-if指令是直接销毁和重建DOM节点，达到让元素显示和隐藏的效果</p>
<h3 id="css只在当前组件中生效" tabindex="-1"><a class="header-anchor" href="#css只在当前组件中生效" aria-hidden="true">#</a> CSS只在当前组件中生效</h3>
<p>在当前文档中使用style标签，并添加scope属性</p>
<h3 id="动态类绑定" tabindex="-1"><a class="header-anchor" href="#动态类绑定" aria-hidden="true">#</a> 动态类绑定</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"color1"</span> <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"{'color2':showBtn}"</span><span class="token operator">></span>   
<span class="token comment">// showBtn: false,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token operator">&lt;</span>div <span class="token operator">:</span><span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"['color1', activeStatus ? 'color2' : '']"</span><span class="token operator">></span>
 <span class="token comment">// activeStatus:true,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="避免-v-if-和-v-for" tabindex="-1"><a class="header-anchor" href="#避免-v-if-和-v-for" aria-hidden="true">#</a> 避免 v-if 和 v-for</h3>
<p>v-for 比 v-if 具有更高的优先级，每一次都需要遍历整个数组，造成不必要的计算，影响性能。</p>
<p>永远不要把 v-if 和 v-for 同时用在同一个元素上，带来性能方面的浪费（每次渲染都会先循环再进行条件判断）</p>
<p>避免出现这种情况，则在外层嵌套template（页面渲染不生成dom节点），在这一层进行v-if判断，然后在内部进行v-for循环</p>
<h3 id="虚拟dom" tabindex="-1"><a class="header-anchor" href="#虚拟dom" aria-hidden="true">#</a> 虚拟Dom</h3>
<p>用JS模拟真实的dom结构，作用是高效的渲染页面 减少不必要的dom操作 提高渲染效率</p>
<h3 id="双向绑定" tabindex="-1"><a class="header-anchor" href="#双向绑定" aria-hidden="true">#</a> 双向绑定</h3>
<p>Vue是采用数据劫持+”发布-订阅模式“的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>双向数据绑定<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>显示：<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">let</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span>
    input<span class="token punctuation">.</span>oninput <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        obj<span class="token punctuation">.</span>name <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// console.log(e)</span>
            <span class="token comment">// obj.name = e</span>
            document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'name1'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> e
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>             
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dota是函数" tabindex="-1"><a class="header-anchor" href="#dota是函数" aria-hidden="true">#</a> dota是函数？</h3>
<p>组件中的<code v-pre>data</code>写成一个函数，数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的<code v-pre>data</code>，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据。</p>
<h3 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> $nextTick</h3>
<p>在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM</p>
<h3 id="父子组件传值" tabindex="-1"><a class="header-anchor" href="#父子组件传值" aria-hidden="true">#</a> 父子组件传值</h3>
<p>父传子</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>父级<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>son</span> <span class="token attr-name">:obj2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>obj1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>son</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> son <span class="token keyword">from</span> <span class="token string">"../components/son.vue"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">obj1</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> son <span class="token punctuation">}</span>
    <span class="token operator">...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>这是子组件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>{{ obj2.name }},{{ obj2.age }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">obj2</span><span class="token operator">:</span> Object<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
    <span class="token operator">...</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子传父</p>
<p>父页面</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>son1</span> <span class="token attr-name">@sonEvent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>faEvent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>son1</span><span class="token punctuation">></span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">faEvent</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子页面</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>send<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>发送<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"小王"</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"sonEvent"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h3>
<p>基础用法</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'HelloWorld'</span><span class="token punctuation">,</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">watchName</span><span class="token operator">:</span><span class="token string">''</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">name</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>watchName <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>deep 深度监听</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">person</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'沐'</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">person</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handler</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'深度监听：'</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue-router" tabindex="-1"><a class="header-anchor" href="#vue-router" aria-hidden="true">#</a> Vue Router</h3>
<p>标签中使用</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">:to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ path: 'test', query: { a: 10 } }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>跳转<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>方法中使用</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span> <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">aa</span><span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 取值</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$route<span class="token punctuation">.</span>query
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嵌套路由</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/user/:id'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> User<span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'profile'</span><span class="token punctuation">,</span>
        <span class="token literal-property property">component</span><span class="token operator">:</span> UserProfile<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token comment">// 路径中有 :id 为动态路由，this.$route.params获取id</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重定向</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/home'</span><span class="token punctuation">,</span> <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">'/'</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="路由守卫" tabindex="-1"><a class="header-anchor" href="#路由守卫" aria-hidden="true">#</a> 路由守卫</h3>
<p>全局前置守卫  router.beforeEach</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">//to：将要进入的路由  from：正要离开的路由</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">'有token'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    to<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">'去登录页'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局后置钩子 router.afterEach</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">afterEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>路由独享的守卫  beforeEnter</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/users/:id'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> UserDetails<span class="token punctuation">,</span>
    <span class="token function-variable function">beforeEnter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token comment">// reject the navigation</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件内的守卫</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>beforeRouteEnter
beforeRouteUpdate
beforeRouteLeave
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由修改网页标题</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span>from<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>title <span class="token operator">=</span> to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title<span class="token punctuation">;</span>    <span class="token comment">//在路由里面写入的meta里面的title字段</span>
  <span class="token punctuation">}</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由模式" tabindex="-1"><a class="header-anchor" href="#路由模式" aria-hidden="true">#</a> 路由模式</h3>
<p>hash模式</p>
<p>使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载，其显示的网路路径中会有 “#” 号，有一点点丑。这是最安全的模式，因为他兼容所有的浏览器和服务器。</p>
<p>history模式
美化后的hash模式，会去掉路径中的 “#”。依赖于Html5 的history，pushState API,所以要担心IE9以及一下的版本，感觉不用担心。并且还包括forward、back、go三个方法，对应浏览器的前进，后退，跳转操作。就是浏览器左上角的前进、后退等按钮进行的操作。</p>
<h3 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> vuex</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">'vuex'</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// 获取数据,类似计算属性</span>
  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>user
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 修改数据user</span>
    <span class="token function">updataUser</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>user <span class="token operator">=</span> user
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// actions为异步操作</span>
  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">asyncUpdataUser</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'updataUser'</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// Vuex 允许我们将 store 分割成模块</span>
  <span class="token comment">// 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块</span>
  <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>getUser<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">"updataUser"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">"asyncUpdataUser"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="vue性能优化" tabindex="-1"><a class="header-anchor" href="#vue性能优化" aria-hidden="true">#</a> vue性能优化</h3>
<p>路由懒加载，访问时才异步加载，import()实现异步组件</p>
<p>组件缓存keep-alive，缓存组件以及状态</p>
<p>v-show复用dom，避免重复创建组件</p>
<p>v-for 遍历时不使用v-if</p>
<p>事件销毁，组件卸载的时候，销毁一些自定义的事件，如定时器</p>
<p>图片懒加载  vue-lazyload</p>
<p>按需加载第三方组件库</p>
<p>服务器端开启gzip压缩</p>
<h3 id="使用echarts" tabindex="-1"><a class="header-anchor" href="#使用echarts" aria-hidden="true">#</a> 使用echarts</h3>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>echarBox<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>echart-box<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">height</span><span class="token punctuation">:</span> 420px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">"echarts"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">drawChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">drawChart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>chart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>echarBox<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跨域解决" tabindex="-1"><a class="header-anchor" href="#跨域解决" aria-hidden="true">#</a> 跨域解决</h3>
<p>1.让服务器的请求头设置允许跨域。</p>
<p>2.jsonp实现跨域请求。</p>
<p>3.vue配置跨域</p>
<p>根目录vue.config.js</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">//配置跨域</span>
            <span class="token string-property property">'/api'</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token string">'https://jsonplaceholder.typicode.com/'</span><span class="token punctuation">,</span> <span class="token comment">//接口地址</span>
                <span class="token literal-property property">changOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//允许跨域</span>
                <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">'^/api'</span><span class="token operator">:</span> <span class="token string">''</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h3>
<p>根目录新建</p>
<p>.env.development，测试环境</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># development
VUE_APP_BASE_API = 'https://api.development.xxx.com'
NODE_ENV = 'development'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.env.production，正式环境</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># production
VUE_APP_BASE_API = 'https://api.production.xxx.com'
NODE_ENV = 'production'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断移动、pc端" tabindex="-1"><a class="header-anchor" href="#判断移动、pc端" aria-hidden="true">#</a> 判断移动、pc端</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token function">_isMobile</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> flag <span class="token operator">=</span> navigator<span class="token punctuation">.</span>userAgent<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>
        <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isMobile <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>isMobile <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// console.log(this.isMobile);</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、webpack" tabindex="-1"><a class="header-anchor" href="#五、webpack" aria-hidden="true">#</a> 五、webpack</h2>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>npm init -y   生成package.json文件</p>
<p>npm i webpack webpack-cli --save-dev</p>
<h2 id="六、小程序" tabindex="-1"><a class="header-anchor" href="#六、小程序" aria-hidden="true">#</a> 六、小程序</h2>
<h3 id="_1-生命周期" tabindex="-1"><a class="header-anchor" href="#_1-生命周期" aria-hidden="true">#</a> 1.生命周期</h3>
<p>页面生命周期</p>
<p>onLoad、onShow、onReady、onHide、onUnload</p>
<h2 id="、nodejs" tabindex="-1"><a class="header-anchor" href="#、nodejs" aria-hidden="true">#</a> 、nodejs</h2>
<h2 id="、其他" tabindex="-1"><a class="header-anchor" href="#、其他" aria-hidden="true">#</a> 、其他</h2>
<h3 id="节流和防抖" tabindex="-1"><a class="header-anchor" href="#节流和防抖" aria-hidden="true">#</a> 节流和防抖</h3>
<p>https://blog.csdn.net/m0_46846526/article/details/117890111?spm=1001.2101.3001.6650.1&amp;utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ELandingCtr%7ERate-1.queryctrv4&amp;depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ELandingCtr%7ERate-1.queryctrv4&amp;utm_relevant_index=2</p>
<p>节流和防抖本质上都是控制事件执行的频率，但是触发事件的时机本质上有区别，防抖是在用户多次触发事件，当用户停止触发事件，将事件执行一次；节流是用户多次触发事件，会在多次触发的过程中，间隔执行事件。</p>
<p>防抖是最后一个执行事件才会触发函数，节流在一定时间内会触发函数。</p>
<p>防抖案例：按钮一直被点击，控制时间1s内被点击，事件不执行，1s后没有被点击则执行事件。</p>
<p>节流案例：按钮被点击后变为禁用状态，5s后变为可点击状态。</p>
<p>防抖：输入框应用</p>
<p>节流：页面滚动加载数据</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">// 防抖</span>
    <span class="token comment">// @fn 是对应请求数据</span>
    <span class="token comment">// @ms 是用户多次触发事件的时间间隔 是一个毫秒数</span>
    <span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> ms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> timeout <span class="token operator">=</span> <span class="token keyword">null</span>
        <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
            timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> ms<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>    <span class="token comment">//节流</span>
    <span class="token comment">// @fn 是对应请求数据</span>
    <span class="token comment">// @ms 是用户多次触发事件的时间间隔 是一个毫秒数</span>
     <span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> ms</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span> <span class="token keyword">return</span>
            flag <span class="token operator">=</span> <span class="token boolean">false</span>
            <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
                <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>
                flag <span class="token operator">=</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span> ms<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="、websocket" tabindex="-1"><a class="header-anchor" href="#、websocket" aria-hidden="true">#</a> 、websocket</h2>
<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h3>
<ul>
<li>
<p>什么是 WebSocket
websocket是HTML5开始提供的一种网络通信协议，它的目的是在浏览器之间建立一个不受限的双方通信的通道，比如说，服务器可以在任意时刻发送信息给浏览器。在websocket的API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输</p>
</li>
<li>
<p>WebSocket 的方法
ws.send() - 向服务器发送数据
ws.close() - 关闭连接</p>
</li>
<li>
<p>WebSocket 的事件
ws.onopen - 建立连接时触发
ws.onmessage - 客户端接受服务端数据时触发
ws.onerror - 通信错误时触发
ws.onclose - 连接关闭时触发</p>
</li>
<li>
<p>WebSocket.readyState
readyState 属性返回实例对象的当前状态，共有四种状态
0 - 表示正在连接
1 - 表示连接成功，可以进行通信
2 - 表示连接正在关闭
3 - 表示连接已经关闭，或者打开连接失败
使用</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 创建一个WebSocket对象</span>
<span class="token keyword">var</span> ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">"接口地址"</span><span class="token punctuation">)</span>

<span class="token comment">// 连接成功时触发</span>
ws<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"连接成功"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 连接失败时触发</span>
ws<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"连接失败"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 发送数据</span>
ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 向服务端发送请求</span>

<span class="token comment">// 接收消息时触发</span>
ws<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">MessagEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>MessagEvent<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 连接关闭的回调函数</span>
ws<span class="token punctuation">.</span><span class="token function-variable function">onclose</span> <span class="token operator">=</span> <span class="token keyword">function</span>（）<span class="token punctuation">{</span>
	alert（<span class="token string">"close"</span>）
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="地图map" tabindex="-1"><a class="header-anchor" href="#地图map" aria-hidden="true">#</a> 地图map</h2>
<p>https://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/helloworld</p>
</div></template>


