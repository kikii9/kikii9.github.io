<template><div><h1 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> npm</h1>
<h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2>
<ol>
<li><code v-pre>npm init</code>：初始化一个新的 npm 项目，并创建一个 <code v-pre>package.json</code> 文件。</li>
<li><code v-pre>npm install</code>：根据 <code v-pre>package.json</code> 文件中的依赖信息，安装项目所需的所有依赖库。</li>
<li><code v-pre>npm install &lt;package-name&gt;</code>：安装指定的包，并将其添加到 <code v-pre>package.json</code> 文件的 <code v-pre>dependencies</code> 或 <code v-pre>devDependencies</code> 对象中。</li>
<li><code v-pre>npm uninstall &lt;package-name&gt;</code>：卸载指定的包，并将其从 <code v-pre>package.json</code> 文件的 <code v-pre>dependencies</code> 或 <code v-pre>devDependencies</code> 对象中移除。</li>
<li><code v-pre>npm update</code>：检查并更新项目的依赖库到最新版本。</li>
<li><code v-pre>npm outdated</code>：检查项目的依赖库是否有新的版本可用。</li>
<li><code v-pre>npm search &lt;package-name&gt;</code>：搜索指定名称的包。</li>
<li><code v-pre>npm run &lt;script-name&gt;</code>：运行在 <code v-pre>package.json</code> 文件中定义的脚本命令。</li>
<li><code v-pre>npm publish</code>：发布您的包到 npm 注册表，使其可以供其他人使用。</li>
<li><code v-pre>npm config set &lt;key&gt; &lt;value&gt;</code>：设置 npm 的配置选项。</li>
</ol>
<h2 id="常用修饰符" tabindex="-1"><a class="header-anchor" href="#常用修饰符" aria-hidden="true">#</a> 常用修饰符</h2>
<ol>
<li>
<p><code v-pre>-g</code> 或 <code v-pre>--global</code>：将包安装到全局环境中，而不是当前项目。</p>
<p>例如：<code v-pre>npm install -g &lt;package-name&gt;</code></p>
</li>
<li>
<p><code v-pre>--save</code> 或 <code v-pre>--save-prod</code>：将包安装为生产依赖，并将其添加到 <code v-pre>dependencies</code> 对象中。</p>
<p>例如：<code v-pre>npm install &lt;package-name&gt; --save</code></p>
</li>
<li>
<p><code v-pre>--save-dev</code> 或 <code v-pre>--save-dev</code>：将包安装为开发依赖，并将其添加到 <code v-pre>devDependencies</code> 对象中。</p>
<p>例如：<code v-pre>npm install &lt;package-name&gt; --save-dev</code></p>
</li>
<li>
<p><code v-pre>--quiet</code>：减少命令的输出信息，只显示警告和错误。</p>
<p>例如：<code v-pre>npm install --quiet &lt;package-name&gt;</code></p>
</li>
<li>
<p><code v-pre>--force</code>：强制执行命令，忽略任何警告或错误。</p>
<p>例如：<code v-pre>npm install --force &lt;package-name&gt;</code></p>
</li>
</ol>
</div></template>


