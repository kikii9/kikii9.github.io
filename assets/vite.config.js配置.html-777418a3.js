import{_ as i,o as n,c as e,a as s}from"./app-fa07bc2d.js";const l={},u=s(`<h1 id="_20240506" tabindex="-1"><a class="header-anchor" href="#_20240506" aria-hidden="true">#</a> 20240506</h1><div class="language-JavaScript line-numbers-mode" data-ext="JavaScript"><pre class="language-JavaScript"><code>import { defineConfig } from &quot;vite&quot;;
import vue from &quot;@vitejs/plugin-vue&quot;;
import * as path from &quot;path&quot;;
import externalGlobals from &quot;rollup-plugin-external-globals&quot;;
import { viteExternalsPlugin } from &quot;vite-plugin-externals&quot;;
import vueCase from &quot;./plugin/vite-plugin-case/index.js&quot;;

// https://vitejs.dev/config/
export default defineConfig({
  base: &quot;./&quot;,
  plugins: [
    vueCase(),
    vue(),
    viteExternalsPlugin({
      &quot;nt-nui&quot;: &quot;nui&quot;,
      vue: &quot;Vue&quot;,
    }),
  ],
  resolve: {
    alias: {
      &quot;@&quot;: path.join(__dirname, &quot;./src&quot;),
    },
  },
  envDir: &quot;./env&quot;,
  server: {
    cors: true,
    port: 8001,
    proxy: {
      &quot;/api&quot;: {
        target: &quot;http://10.20.30.40:1234/&quot;,
        changeOrigin: true,
        rewrite: (path) =&gt; path.replace(/^\\/api/, &quot;&quot;),
          //这个设置能看到代理前后的地址
        bypass(req, res, options: any) {
          const proxyURL = options.target + options.rewrite(req.url);
          console.log(&quot;proxyURL&quot;, proxyURL);
          req.headers[&quot;x-req-proxyURL&quot;] = proxyURL; // 设置未生效
          res.setHeader(&quot;x-req-proxyURL&quot;, proxyURL); // 设置响应头可以看到
        },
      },
    },
  },
  build: {
    rollupOptions: {
      external: [&quot;vue&quot;, &quot;nui&quot;, &quot;vue-router&quot;],
      plugins: [
        externalGlobals({ vue: &quot;Vue&quot;, nui: &quot;nui&quot;, &quot;vue-router&quot;: &quot;VueRouter&quot; }),
      ],
      output: {
        format: &quot;iife&quot;,
        chunkFileNames: &quot;main.js&quot;,
        inlineDynamicImports: true,
      },
    },
  },
});

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[u];function v(d,t){return n(),e("div",null,r)}const o=i(l,[["render",v],["__file","vite.config.js配置.html.vue"]]);export{o as default};
