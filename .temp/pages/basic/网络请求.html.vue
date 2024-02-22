<template><div><h1 id="网络请求" tabindex="-1"><a class="header-anchor" href="#网络请求" aria-hidden="true">#</a> 网络请求</h1>
<h2 id="基本概念和内容" tabindex="-1"><a class="header-anchor" href="#基本概念和内容" aria-hidden="true">#</a> 基本概念和内容</h2>
<p>网络请求是客户端与服务器之间进行数据交互的过程。在网络请求中，常用的一些概念和内容包括：</p>
<h3 id="请求头-request-headers" tabindex="-1"><a class="header-anchor" href="#请求头-request-headers" aria-hidden="true">#</a> 请求头（Request Headers）</h3>
<p>请求头是客户端发送给服务器的一组键值对，用于描述请求的信息，其中包括请求方式、请求路径、请求参数、请求体、身份认证等内容。常见的请求头有以下几种：</p>
<ul>
<li><code v-pre>Content-Type</code>：指示请求或响应中的数据类型，常见的有 <code v-pre>application/json</code>、<code v-pre>application/x-www-form-urlencoded</code>、<code v-pre>multipart/form-data</code> 等。</li>
<li><code v-pre>Authorization</code>：用于身份认证，通常包含用户凭证、授权类型等信息。</li>
<li><code v-pre>User-Agent</code>：用于标识发送请求的客户端类型，通常包含操作系统、浏览器及其版本等信息。</li>
</ul>
<h3 id="请求体-request-body" tabindex="-1"><a class="header-anchor" href="#请求体-request-body" aria-hidden="true">#</a> 请求体（Request Body）</h3>
<p>请求体用于在 HTTP 请求中向服务端传递数据，例如在 POST 或 PUT 方法中提交表单数据或上传文件时，就需要使用请求体。常见的请求体格式有以下几种：</p>
<ul>
<li>JSON 格式：用于发送结构化的数据，如 <code v-pre>{ &quot;name&quot;: &quot;John&quot;, &quot;age&quot;: 30 }</code>。</li>
<li>表单数据格式：用于发送经过 URL 编码的表单数据，如 <code v-pre>name=John&amp;age=30</code>。</li>
<li>文件上传格式：用于发送带有文件的表单数据，在请求体中可以包含多个部分，每个部分都有自己的 Content-Type 和 Content-Disposition 信息。</li>
</ul>
<h3 id="响应体-response-body" tabindex="-1"><a class="header-anchor" href="#响应体-response-body" aria-hidden="true">#</a> 响应体（Response Body）</h3>
<p>响应体是服务器返回给客户端的处理结果，包含了请求所需要的数据或者错误信息。常见的响应体格式有以下几种：</p>
<ul>
<li>JSON 格式：用于发送结构化的数据，如 <code v-pre>{ &quot;result&quot;: &quot;success&quot;, &quot;data&quot;: { &quot;name&quot;: &quot;John&quot;, &quot;age&quot;: 30 } }</code>。</li>
<li>HTML 格式：用于显示网页内容的数据，通常会包含一些标签和样式。</li>
<li>图片格式：用于发送图片数据，如 JPEG、PNG、GIF 等。</li>
</ul>
<h3 id="请求方法-request-methods" tabindex="-1"><a class="header-anchor" href="#请求方法-request-methods" aria-hidden="true">#</a> 请求方法（Request Methods）</h3>
<p>请求方法指示客户端对服务器资源的操作类型。常见的请求方法有以下几种：</p>
<ul>
<li>GET：用于获取资源。</li>
<li>POST：用于提交数据，创建新的资源。</li>
<li>PUT：用于更新资源。</li>
<li>DELETE：用于删除资源。</li>
<li>PATCH：用于部分更新资源。</li>
</ul>
<h3 id="请求路径-request-url" tabindex="-1"><a class="header-anchor" href="#请求路径-request-url" aria-hidden="true">#</a> 请求路径（Request URL）</h3>
<p>请求路径指示客户端请求的资源在服务器上的位置。它由主机名、端口号、路径和查询参数组成。例如，<code v-pre>https://example.com/api/users?id=123</code> 中的 <code v-pre>/api/users</code> 就是请求路径。</p>
<h3 id="查询参数-query-parameters" tabindex="-1"><a class="header-anchor" href="#查询参数-query-parameters" aria-hidden="true">#</a> 查询参数（Query Parameters）</h3>
<p>查询参数是附加在请求路径后面的键值对，用于传递额外的请求参数。例如，<code v-pre>https://example.com/api/users?id=123</code> 中的 <code v-pre>id=123</code> 就是查询参数。</p>
<h3 id="状态码-status-codes" tabindex="-1"><a class="header-anchor" href="#状态码-status-codes" aria-hidden="true">#</a> 状态码（Status Codes）</h3>
<p>状态码是服务器在响应中返回的一个数字，用于表示请求的处理结果。常见的状态码有以下几种：</p>
<ul>
<li>200：请求成功。</li>
<li>400：请求参数错误。</li>
<li>401：未经授权，需要身份验证。</li>
<li>404：请求的资源不存在。</li>
<li>500：服务器内部错误。</li>
</ul>
<h3 id="响应头-response-headers" tabindex="-1"><a class="header-anchor" href="#响应头-response-headers" aria-hidden="true">#</a> 响应头（Response Headers）</h3>
<p>响应头是服务器在响应中返回给客户端的一组键值对，用于描述响应的信息，包括内容类型、缓存控制、跨域设置等。</p>
</div></template>


