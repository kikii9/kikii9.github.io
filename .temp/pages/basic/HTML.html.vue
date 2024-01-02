<template><div><h1 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h1>
<h2 id="_1-什么是html" tabindex="-1"><a class="header-anchor" href="#_1-什么是html" aria-hidden="true">#</a> 1. 什么是HTML</h2>
<p><strong>用于描述网页的一种标记语言</strong></p>
<ul>
<li>Hyper Text Markup Language</li>
<li>不是编程语言,是一种标记语言</li>
<li>HTML文档也叫做web页面</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span> //指定文档类型为HTML
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>//文档语言为英语

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>

    //<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span><span class="token punctuation">></span></span> 标签用于提供有关 HTML 文档的元数据，例如页面有效期、页面作者、关键字列表、页面描述等信息。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span><span class="token punctuation">></span></span> 标签定义的数据并不会显示在页面上，但却会被浏览器解析。

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>//charset 属性用来指定 HTML 文档的字符编码

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>//有且仅有一个，仅允许包含纯文本内容，不能包含其他HTML标签

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://kikii9.space/<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>//用于为页面中所有相对链接指定一个基本链接，当您设置了基本链接后，当前页面中的所有相对链接都会使用这个基本链接作为前缀

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>common.css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>//用于引用外部 CSS 样式表，<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span><span class="token punctuation">></span></span> 标签中包含两个主要的属性，分别是 rel 和 href。rel 属性用来指示引用文件的类型，href 属性用来设置外部文件的路径，可包含任意数量的<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span><span class="token punctuation">></span></span>标签
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>meta的属性值</strong></p>
<table>
<thead>
<tr>
<th>属性</th>
<th>值</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>charset</td>
<td>character_set</td>
<td>规定HTML文档的字符编码</td>
</tr>
<tr>
<td>content</td>
<td>text</td>
<td>定义与http-equip或name属性相关的元信息</td>
</tr>
<tr>
<td>http-equip</td>
<td>content-security-policy <br />content-type<br /> default-style <br />refresh</td>
<td>把 content 属性关联到 HTTP 头部。</td>
</tr>
<tr>
<td>name</td>
<td>application-name <br />author <br />description <br />generator<br /> keywords<br /> viewport</td>
<td>把 content 属性关联到一个名称。</td>
</tr>
<tr>
<td>scheme</td>
<td>some_text</td>
<td>定义用于翻译 content 属性值的格式。</td>
</tr>
</tbody>
</table>
</div></template>


