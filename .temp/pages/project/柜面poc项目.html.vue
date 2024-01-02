<template><div><h1 id="柜面poc项目" tabindex="-1"><a class="header-anchor" href="#柜面poc项目" aria-hidden="true">#</a> 柜面poc项目</h1>
<h2 id="项目概述" tabindex="-1"><a class="header-anchor" href="#项目概述" aria-hidden="true">#</a> 项目概述</h2>
<p>开发周期：20230530-20230718</p>
<p>项目概要：相关链接：<a href="https://blog.csdn.net/anywhere88/article/details/84564739" target="_blank" rel="noopener noreferrer">POC项目建设模式_数据交换 ANYWHERE的博客-CSDN博客<ExternalLinkIcon/></a></p>
<p>评价：面子工程，招标用</p>
<p>难度：⭐⭐</p>
<p>繁琐程度：⭐⭐⭐⭐</p>
<p><strong>相关知识点：</strong></p>
<ul>
<li>组件的封装与使用</li>
<li>控制台调样式</li>
<li>瀑布流布局</li>
<li>自适应布局</li>
<li>网络请求的封装</li>
<li>样式穿透</li>
<li>mixin用法</li>
</ul>
<h2 id="组件的封装与使用" tabindex="-1"><a class="header-anchor" href="#组件的封装与使用" aria-hidden="true">#</a> 组件的封装与使用</h2>
<p>步骤：</p>
<ol>
<li>在子组件中接收来自父页面的属性</li>
<li>子组件中的事件通过$emit事件派发给父页面</li>
<li>父页面使用v-on接收事件</li>
</ol>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>//子组件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ content }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleButtonClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'MyComponent'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">content</span><span class="token operator">:</span> String
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleButtonClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'button-clicked'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>//父组件
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Hello<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Welcome to MyComponent<span class="token punctuation">"</span></span> <span class="token attr-name">@button-clicked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleButtonClicked<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-component</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">'@/components/MyComponent.vue'</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    MyComponent
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">handleButtonClicked</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Button clicked in parent component'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 在这里编写响应事件的逻辑</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="控制台调样式" tabindex="-1"><a class="header-anchor" href="#控制台调样式" aria-hidden="true">#</a> 控制台调样式</h2>
<p>这个到时再说吧</p>
<h2 id="瀑布流布局" tabindex="-1"><a class="header-anchor" href="#瀑布流布局" aria-hidden="true">#</a> 瀑布流布局</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code> <span class="token punctuation">.</span>container<span class="token punctuation">{</span>
            column<span class="token operator">-</span>count<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">;</span><span class="token comment">//想要排成的列数</span>
            column<span class="token operator">-</span>gap<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">.</span>item img<span class="token punctuation">{</span>
            <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自适应布局" tabindex="-1"><a class="header-anchor" href="#自适应布局" aria-hidden="true">#</a> 自适应布局</h2>
<ul>
<li>flex布局</li>
<li>使用rem</li>
<li>使用媒体查询</li>
</ul>
<h2 id="网络请求的封装" tabindex="-1"><a class="header-anchor" href="#网络请求的封装" aria-hidden="true">#</a> 网络请求的封装</h2>
<ol>
<li>安装axios <code v-pre>npm install axios</code></li>
<li>引入axios</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> axios form <span class="token string">'axios'</span>
<span class="token keyword">import</span> <span class="token constant">QS</span> form <span class="token string">'qs'</span><span class="token comment">//序列化珀斯特类型的数据</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>Toast<span class="token punctuation">}</span> form <span class="token string">'vant'</span><span class="token comment">//引入提示框</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>环境的切换</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></div></template>


