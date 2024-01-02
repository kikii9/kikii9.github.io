<template><div><h1 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h1>
<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<p>Node.js是一个基于Chrome V8引擎的JavaScript运行时环境，它使JavaScript能够在服务器端运行，与传统的浏览器端JavaScript不同，Node.js提供了一组强大的内置模块和工具，可以用于开发服务器端应用程序。</p>
<h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h2>
<ol>
<li>异步非阻塞I/O模型</li>
<li>单线程</li>
<li>轻量高效</li>
<li>丰富的模块生态</li>
</ol>
<h2 id="引入模块" tabindex="-1"><a class="header-anchor" href="#引入模块" aria-hidden="true">#</a> 引入模块</h2>
<ol>
<li><code v-pre>require</code>（CommonJS）
<ol>
<li>用法：<code v-pre>const module = require('module-name')</code></li>
<li>同步的，会阻塞代码直至所需模块加载完成</li>
</ol>
</li>
<li><code v-pre>import</code>（ES6模块）
<ol>
<li>用法：<code v-pre>import module from 'module-name'</code></li>
<li>异步的，不会阻塞代码执行</li>
</ol>
</li>
<li>区别
<ol>
<li>语法：<code v-pre>require</code>使用函数调用的形式，<code v-pre>import</code>使用关键字</li>
<li>声明提升：<code v-pre>require</code>是运行时执行的，<code v-pre>import</code>是编译时执行的，这就意味着所有的<code v-pre>require</code>语句都会被提升到作用域的顶部，而<code v-pre>import</code>不会受限制</li>
<li>导出多个成员：<code v-pre>require</code>引入的模块可以导出多个成员，可通过对象属性的形式访问，而 <code v-pre>import</code>引入的模块每个成员需要单独导入</li>
<li>动态导入：<code v-pre>import</code>是动态导入的，可以在运行时动态加载模块，<code v-pre>require</code>不支持动态导入</li>
</ol>
</li>
</ol>
</div></template>


