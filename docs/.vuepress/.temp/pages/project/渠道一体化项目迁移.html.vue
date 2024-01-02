<template><div><h1 id="渠道一体化项目迁移" tabindex="-1"><a class="header-anchor" href="#渠道一体化项目迁移" aria-hidden="true">#</a> 渠道一体化项目迁移</h1>
<p>开发周期1：20230807-20230821</p>
<p>开发周期2：20230904-20230915</p>
<p>项目概述：后台管理平台，经典组合技术栈（vue2+elementui）</p>
<p>难度：⭐⭐</p>
<p>繁琐程度：⭐⭐</p>
<p>相关知识点：</p>
<ul>
<li>在不修改表格数据的情况下使用插槽修改表格展示数据</li>
<li>下拉框的配置项以及数据源配置</li>
<li><code v-pre>vue.filer</code>  (过滤器)</li>
<li>elementui上传组件的用法</li>
<li>clonedeep是个啥</li>
<li>使用插槽修改表格</li>
<li>路由传参query和params的区别</li>
<li>0914-less和scss的样式穿透用法区别</li>
<li>0914-项目的目录结构</li>
<li>0914-后端的数据库（dbServer Navicat...)区别</li>
<li></li>
</ul>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#isdisable</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>是否禁用<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scope<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
              {{ scope.row.isdisable == 1 ? "是" : "否" }}
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="插槽" tabindex="-1"><a class="header-anchor" href="#插槽" aria-hidden="true">#</a> 插槽</h2>
<p>复习一下插槽是什么</p>
<p>是什么：用于灵活修改组件的一个东西</p>
<p>分类：</p>
<ul>
<li>默认插槽</li>
<li>具名插槽</li>
<li>作用域插槽</li>
</ul>
<p>20230906</p>
<p>又是用到插槽的一天，很多东西不知道原理但是知道怎么用就很神奇，先模仿再超越，优秀开发者的第一步</p>
<h2 id="_20230914" tabindex="-1"><a class="header-anchor" href="#_20230914" aria-hidden="true">#</a> 20230914</h2>
<h3 id="manage-template" tabindex="-1"><a class="header-anchor" href="#manage-template" aria-hidden="true">#</a> Manage-template</h3>
<p>开发者须知：</p>
<ol>
<li>接口文件分模块命名存放在src/api/separate中</li>
<li>同样，组件也分模块存放：
<ol>
<li>src/components/common则存放全局通用组件</li>
<li>src/components/separate则存放局部模块组件（建议每个模块另创建文件夹存放）</li>
</ol>
</li>
</ol>
<p>目录结构：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>│  <span class="token punctuation">.</span>browserslistrc
│  <span class="token punctuation">.</span>gitignore                             # 配置git忽略的文件或目录
│  babel<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js                        # babel配置文件
│  jsconfig<span class="token punctuation">.</span>json           
│  <span class="token keyword">package</span><span class="token operator">-</span>lock<span class="token punctuation">.</span>json                      # 项目所需依赖的版本
│  <span class="token keyword">package</span><span class="token punctuation">.</span>json                           # 项目所需依赖文件
│  <span class="token constant">README</span><span class="token punctuation">.</span>md                              # readme文档
│  vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js                          # vue配置文件
│
├─<span class="token keyword">public</span>
│    ├─favicon<span class="token punctuation">.</span>ico                        # 网页标题图标（可替换
│    └─index<span class="token punctuation">.</span>html                         # 首页模板
│
└─src
    ├─ App<span class="token punctuation">.</span>vue                            # 父组件
    ├─ main<span class="token punctuation">.</span>js                            # 入口文件
    │
    ├─api                                 # 存放api接口文件目录
    │  ├─ common                          # 存放请求相关的公共接口文件目录
    │  │    └─request<span class="token punctuation">.</span>js                  # 封装请求文件
    │  │
    │  └─separate                         # 存放各模块相关的接口文件目录
    │        └─login<span class="token punctuation">.</span>js                   # 登录模块接口
    │
    ├─assets                              # 存放静态文件目录
    │
    ├─components                          # 存放项目所有组件目录
    │  ├─common                           # 存放全局通用组件目录
    │  └─separate                         # 存放各模块组件目录（建议开发时额外新建以模块命名文件夹存放相关组件）
    │
    ├─config                              # 项目中的一些配置文件目录
    │  └─menuConfig<span class="token punctuation">.</span>js                    # 菜单配置
    │
    ├─plugins                             # 存放项目所有三方插件目录
    │  ├─el<span class="token operator">-</span>dialog<span class="token operator">-</span>drag                   # element<span class="token operator">-</span>ui dialog组件拖拽功能（自定义指令：v<span class="token operator">-</span>drag）
    │  ├─bus<span class="token punctuation">.</span>js                           # 全局事件总线
    │  ├─element<span class="token punctuation">.</span>js                       # 按需引入element组件
    │  ├─unicons<span class="token punctuation">.</span>js                       # 按需引入unicons图标
    │  └─vxe<span class="token operator">-</span>table<span class="token punctuation">.</span>js                     # 按需引入vxe<span class="token operator">-</span>table组件
    │
    ├─router                              # 存放路由相关文件目录
    │    ├─index<span class="token punctuation">.</span>js                       # 路由主入口配置
    │    ├─routes<span class="token punctuation">.</span>js                      # 项目中的所有路由
    │    └─config                         # 路由其他配置目录
    │        └─setRouter_tree<span class="token punctuation">.</span>js          # 配置动态路由<span class="token operator">-</span>树形数据
    │        └─setRouter_parallel<span class="token punctuation">.</span>js      # 配置动态路由<span class="token operator">-</span>线性数据
    │        └─setRouter<span class="token punctuation">.</span>js               # 配置动态路由入口，判断数据结构类型
    │
    ├─store                               # 存放vuex 需要的状态关联文件
    │    └─index<span class="token punctuation">.</span>js                       # vuex入口文件
    │    └─modules                        # vuex各模块目录
    │        └─pageCache<span class="token punctuation">.</span>js               # 页面缓存
    │
    ├─styles                     # 存放样式所需的文件
    │    ├─common<span class="token punctuation">.</span>scss           # 全局通用样式
    │    ├─elementVars<span class="token punctuation">.</span>scss      # 修改element<span class="token operator">-</span>ui组件样式
    │    ├─scrollbar<span class="token punctuation">.</span>css         # 滚动条样式
    │    └─vars<span class="token punctuation">.</span>scss             # 管理端框架样式
    │
    ├─utils                      # 存放所需的工具方法
    │    ├─message<span class="token punctuation">.</span>js            # 修改element<span class="token operator">-</span>ui的message组件
    │    ├─mixin<span class="token punctuation">.</span>js              # 混入
    │    ├─purifyObject<span class="token punctuation">.</span>js       # 过滤对象方法
    │    ├─rsa<span class="token punctuation">.</span>js                # rsa加密
    │    ├─storage<span class="token punctuation">.</span>js            # localStorage和sessionStorage的加密封装
    │    ├─utils<span class="token punctuation">.</span>js              # 通用工具方法
    │    └─validate<span class="token punctuation">.</span>js           # 数据校验方法
    │
    └─views
        ├─ <span class="token number">404</span><span class="token punctuation">.</span>vue               # <span class="token number">404</span>错误页面
        ├─ Home<span class="token punctuation">.</span>vue              # 页面框架
        ├─ Login<span class="token punctuation">.</span>vue             # 登陆页面
        ├─ Welcome<span class="token punctuation">.</span>vue           # 欢迎页面
        │
        └─pages                  # 存放项目所需要的页面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="elementui-之【el-table】的魔改" tabindex="-1"><a class="header-anchor" href="#elementui-之【el-table】的魔改" aria-hidden="true">#</a> elementui 之【el-table】的魔改</h3>
<ul>
<li>
<p>表格显示多选框的状态下实现表格数据的单选</p>
</li>
<li>
<p>表头的全选框隐藏</p>
</li>
<li>
<p>效果图</p>
</li>
<li>
<p>实现代码</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tagTable<span class="token punctuation">"</span></span> 
       <span class="token attr-name">:configs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableConfigs1<span class="token punctuation">"</span></span> 
       <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table1.data<span class="token punctuation">"</span></span> 
       <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table1.loading<span class="token punctuation">"</span></span>
       <span class="token attr-name">:selection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> 
       <span class="token attr-name">@selection-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleSelectionChange<span class="token punctuation">"</span></span> 
       <span class="token attr-name">:showIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#rule_detail</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>标签规则<span class="token punctuation">"</span></span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>440<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">slot-scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scope<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(rule, index) in scope.row.rule_detail<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-tag</span><span class="token punctuation">></span></span>
                          {{ rule.tag_name }}{{ getEquationText(rule.equation) }}{{ rule.tag_value }}
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-tag</span><span class="token punctuation">></span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index !== scope.row.rule_detail.length - 1<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mini<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">circle</span><span class="token punctuation">></span></span>
                          {{ getTypeText(rule.type) }}
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
                      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">></span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Table</span><span class="token punctuation">></span></span>

...


handleSelectionChange(selection) {
      if (selection.length > 1) {
        this.$refs.tagTable.$refs.table.clearSelection();
        this.$refs.tagTable.$refs.table.toggleRowSelection(selection.pop())
      } else if (selection.length === 1) {
        this.checkedRow = selection.pop()
        this.tagList = [this.checkedRow.tagle_id]
      } else {
        this.checkedRow = {}
      }
    },


...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span>
//隐藏表头全选框
:deep(.el-table__header-wrapper .el-checkbox) {

  display: none;
}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-预处理器" tabindex="-1"><a class="header-anchor" href="#css-预处理器" aria-hidden="true">#</a> CSS 预处理器</h2>
<ul>
<li>scss/sass</li>
<li>less</li>
<li>stylus</li>
</ul>
<table>
<thead>
<tr>
<th></th>
<th>语法</th>
<th>特点</th>
<th>是否支持变量</th>
<th>定义变量的方法</th>
<th>样式穿透用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>sass</td>
<td>#container<br />width:100px</td>
<td>严格的语法缩进，不需要{}和；</td>
<td>✔️️</td>
<td>$container-color:red<br />.container<br /><br />background-color:$container-color</td>
<td>::deep</td>
</tr>
<tr>
<td>scss</td>
<td>#container{<br />        width:100px;<br />}</td>
<td>sass的升级版</td>
<td>✔️</td>
<td>$container-color:red<br />.container<br /><br />background-color:$container-color</td>
<td>::deep</td>
</tr>
<tr>
<td>less</td>
<td></td>
<td>与css写法接近，使用{}和；</td>
<td>✔️</td>
<td>@container-color:red<br />.container<br /><br />background-color:@container-color</td>
<td>/deep/</td>
</tr>
<tr>
<td>stylus</td>
<td></td>
<td></td>
<td>❌</td>
<td></td>
<td></td>
</tr>
<tr>
<td>css</td>
<td></td>
<td></td>
<td>❌</td>
<td></td>
<td>&gt;&gt;&gt;</td>
</tr>
</tbody>
</table>
</div></template>


