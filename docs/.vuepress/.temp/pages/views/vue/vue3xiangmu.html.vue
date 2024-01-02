<template><div><h1 id="vue3项目" tabindex="-1"><a class="header-anchor" href="#vue3项目" aria-hidden="true">#</a> vue3项目</h1>
<h2 id="一、项目初始化" tabindex="-1"><a class="header-anchor" href="#一、项目初始化" aria-hidden="true">#</a> 一、项目初始化</h2>
<h3 id="_1-vite" tabindex="-1"><a class="header-anchor" href="#_1-vite" aria-hidden="true">#</a> 1.Vite</h3>
<p>https://cn.vitejs.dev/</p>
<p>使用 PNPM（高性能的npm）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm i -g pnpm
pnpm -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建项目</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pnpm create vite
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装依赖</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pnpm i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>自动打开浏览器</p>
<p>package.json</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>  "dev": "vite --open",
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-eslint" tabindex="-1"><a class="header-anchor" href="#_2-eslint" aria-hidden="true">#</a> 2. eslint</h3>
<p>安装eslint 代码检测</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pnpm i eslint -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>生成配置文件</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npx eslint --init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-src别名" tabindex="-1"><a class="header-anchor" href="#_3-src别名" aria-hidden="true">#</a> 3.src别名</h3>
<p>用@符号替换./src</p>
<p>vite.config.ts</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//@ts-ignore</span>
<span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">'path'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>  resolve<span class="token operator">:</span><span class="token punctuation">{</span>
    alias<span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token string-property property">"@"</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"./src"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tsconfig.json</p>
<p>compilerOptions</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>    <span class="token property">"baseUrl"</span><span class="token operator">:</span> <span class="token string">"./"</span><span class="token punctuation">,</span>
    <span class="token property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"@/*"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"src/*"</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-环境变量" tabindex="-1"><a class="header-anchor" href="#_4-环境变量" aria-hidden="true">#</a> 4.环境变量</h3>
<p>.env.development</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># development
# console.log(import.meta.env)

NODE_ENV = 'development'

VITE_APP_TITLE = '开发环境'

VITE_APP_BASE_API= 'https://api.development.xxx.com'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>.env.production</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code># production

NODE_ENV = 'production'

VITE_APP_TITLE = '开发环境'

VITE_APP_BASE_API= 'https://api.production.xxx.com'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-element-plus" tabindex="-1"><a class="header-anchor" href="#_5-element-plus" aria-hidden="true">#</a> 5.element-plus</h3>
<p>https://element-plus.org/zh-CN/guide/installation.html</p>
<p>安装</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pnpm install element-plus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>快速开始</p>
<p>https://element-plus.org/zh-CN/guide/quickstart.html</p>
<p>国际化</p>
<p>https://element-plus.org/zh-CN/guide/i18n.html</p>
<h3 id="_6-svg使用" tabindex="-1"><a class="header-anchor" href="#_6-svg使用" aria-hidden="true">#</a> 6.svg使用</h3>
<p>安装</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pnpm i vite-plugin-svg-icons -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>main.ts</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import 'virtual:svg-icons-register'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建svg文件夹</p>
<p>src/assets/icons</p>
<p>vite.config.ts</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token function">createSvgIconsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token comment">// 指定svg文件夹</span>
            iconDirs<span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'src/assets/icons'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token comment">// 指定symbolId格式</span>
            symbolId<span class="token operator">:</span> <span class="token string">'icon-[dir]-[name]'</span>  
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p>
<p>src/assets/icons/welcome.svg</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span><span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name"><span class="token namespace">xlink:</span>href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#icon-welcome<span class="token punctuation">"</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-注册全局组件" tabindex="-1"><a class="header-anchor" href="#_7-注册全局组件" aria-hidden="true">#</a> 7.注册全局组件</h3>
<p>普通main.ts引入</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> SvgIcon <span class="token keyword">from</span> <span class="token string">'./components/SvgIcon.vue'</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'SvgIcon'</span><span class="token punctuation">,</span> SvgIcon<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义组件统一全局注册</p>
<p>/components/index.ts</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">//引入项目中全部的全局组件</span>
<span class="token keyword">import</span> SvgIcon <span class="token keyword">from</span> <span class="token string">'./SvgIcon/index.vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Pagination <span class="token keyword">from</span> <span class="token string">'./Pagination/index.vue'</span>
<span class="token comment">//全局对象</span>
<span class="token keyword">const</span> allGloablComponent<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token punctuation">{</span> SvgIcon<span class="token punctuation">,</span> Pagination <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//对外暴露插件对象</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token comment">//务必叫做install方法</span>
    <span class="token function">install</span><span class="token punctuation">(</span>app<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//注册项目全部的全局组件</span>
        Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>allGloablComponent<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>key <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">//注册为全局组件</span>
            app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> allGloablComponent<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>main.ts</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> gloalComponent <span class="token keyword">from</span> <span class="token string">'@/components'</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>gloalComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-sass使用" tabindex="-1"><a class="header-anchor" href="#_8-sass使用" aria-hidden="true">#</a> 8.sass使用</h3>
<p>安装</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pnpm install -D sass
pnpm install -D sass-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token selector">&lt;style scoped lang="scss">
  .box</span><span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token selector">.son</span><span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
&lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局样式</p>
<p>/styles/index.scss  中引入 /styles/reset.scss</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">'./reset.scss'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>main.ts</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import '@/styles/index.scss'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>全局变量$</p>
<p>/styles/variable.scss</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$color</span></span><span class="token punctuation">:</span>blue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>vite.config.ts</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        javascriptEnabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        additionalData<span class="token operator">:</span> <span class="token string">'@import "./src/styles/variable.scss";'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量使用</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-mock" tabindex="-1"><a class="header-anchor" href="#_9-mock" aria-hidden="true">#</a> 9.mock</h3>
<p>安装</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>pnpm install -D vite-plugin-mock mockjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>根目录创建 mock 文件夹</p>
<p>/mock/user.ts</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
    <span class="token comment">// 用户登录接口</span>
    <span class="token punctuation">{</span>
        url<span class="token operator">:</span> <span class="token string">'/api/user/login'</span><span class="token punctuation">,</span><span class="token comment">//请求地址</span>
        method<span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span><span class="token comment">//请求方式</span>
        <span class="token function-variable function">response</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> body <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">//获取请求体携带过来的用户名与密码</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> username<span class="token punctuation">,</span> password <span class="token punctuation">}</span> <span class="token operator">=</span> body<span class="token punctuation">;</span>
            <span class="token comment">//调用获取用户信息函数,用于判断是否有此用户</span>
            <span class="token keyword">const</span> checkUser <span class="token operator">=</span> <span class="token function">createUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>
                <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>username <span class="token operator">===</span> username <span class="token operator">&amp;&amp;</span> item<span class="token punctuation">.</span>password <span class="token operator">===</span> password<span class="token punctuation">,</span>
            <span class="token punctuation">)</span>
            <span class="token comment">//没有用户返回失败信息</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>checkUser<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">201</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">'账号或者密码不正确'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//如果有返回成功信息</span>
            <span class="token keyword">const</span> <span class="token punctuation">{</span> token <span class="token punctuation">}</span> <span class="token operator">=</span> checkUser
            <span class="token keyword">return</span> <span class="token punctuation">{</span> code<span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token punctuation">{</span> token <span class="token punctuation">}</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vite.config.ts</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> viteMockServe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vite-plugin-mock'</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">viteMockServe</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      localEnabled<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 是否开启开发环境</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决if (!require.cache) { ^ReferenceError: require is not defined}报错</p>
<p>/node_modules/vite-plugin-mock/dist/index.mjs</p>
<p>加入以下</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import { createRequire } from 'module';
const require = createRequire(import.meta.url);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>页面使用</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code>  <span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    url<span class="token operator">:</span> <span class="token string">'/api/user/login'</span><span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span>
    data<span class="token operator">:</span> <span class="token punctuation">{</span>
      username<span class="token operator">:</span> <span class="token string">'admin'</span><span class="token punctuation">,</span>
      password<span class="token operator">:</span> <span class="token string">'111111'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-axios" tabindex="-1"><a class="header-anchor" href="#_10-axios" aria-hidden="true">#</a> 10.axios</h3>
</div></template>


