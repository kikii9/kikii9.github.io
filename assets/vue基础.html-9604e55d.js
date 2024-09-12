import{_ as e,o as n,c as d,a as i}from"./app-fa07bc2d.js";const l={},s=i(`<h1 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> vue</h1><h2 id="_20240326" tabindex="-1"><a class="header-anchor" href="#_20240326" aria-hidden="true">#</a> 20240326</h2><h3 id="watch-侦听属性" tabindex="-1"><a class="header-anchor" href="#watch-侦听属性" aria-hidden="true">#</a> watch-侦听属性</h3><table><thead><tr><th>属性</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>handler</td><td>必须。当被观察的属性发生变化时执行的回调函数。回调接受两个参数：新值和旧值。</td><td><code>handler(newVal, oldVal) {...}</code></td></tr><tr><td>immediate</td><td>可选。布尔值，默认为<code>false</code>。若设置为<code>true</code>，则在<code>watch</code>被定义后立即执行一次回调函数。</td><td><code>immediate: true</code></td></tr><tr><td>deep</td><td>可选。布尔值，默认为<code>false</code>。若设置为<code>true</code>，则进行深度监听（观察对象内部属性的变化）。适用于对象或数组类型的属性。</td><td><code>deep: true</code></td></tr><tr><td>flush</td><td><strong>Vue 2.x 特性</strong>。可选。字符串，默认为<code>&#39;pre&#39;</code>。决定回调执行时机，可选值为 <code>&#39;pre&#39;</code>(视图更新前) 或 <code>&#39;post&#39;</code>(视图更新后)，但并不常用。</td><td><code>flush: &#39;post&#39;</code></td></tr></tbody></table><p><strong>Vue 2.x</strong>:</p><ul><li><p><code>watch</code>是 Vue 实例的一个选项，用于监听数据的变化：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div></li></ul><p>watch: { // 监听单个属性 myProperty: function (newVal, oldVal) { // ... },</p><pre><code>// 监听多个属性（复合属性）
multipleProps: [
  &#39;prop1&#39;,
  &#39;prop2&#39;,
  function (newValues, oldValues) {
    // ...
  }
],

// 深度监听对象或数组的变化
nestedObject: {
  handler: function (newVal, oldVal) {
    // ...
  },
  deep: true
},

// 立即执行一次回调
immediate: function (newVal, oldVal) {
  // ...
},
immediate: true
</code></pre><p>}</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
**Vue 3.x**:

- \`watch\` 是一个在\`setup()\` 函数中使用的函数，返回一个可清理的监听器（Cleanup Function）：

  \`\`\`javascript
  import { ref, watch } from &#39;vue&#39;;
  
  export default {
    setup() {
      const myProperty = ref(&#39;initial value&#39;);
      
      // 监听单个响应式属性
      watch(myProperty, (newVal, oldVal) =&gt; {
        // ...
      }, {
        // 深度监听
        deep: true,
        
        // 立即执行一次回调
        immediate: true,
        
        // 控制回调执行的时机
        flush: &#39;post&#39; // 或 &#39;pre&#39; (默认)
      });
  
      // 监听多个属性
      watch([myProperty, anotherRef], ([newProp1, newProp2], [oldProp1, oldProp2]) =&gt; {
        // ...
      }, { /* 选项 */ });
  
      // 返回的停止监听函数
      const stopWatcher = watch(() =&gt; {
        // 计算属性
        return computedValue.value;
      }, (newVal, oldVal) =&gt; {
        // ...
      }, { /* 选项 */ });
  
      // 若要停止监听，可调用返回的函数
      // stopWatcher();
  
      return { myProperty };
    }
  }
  \`\`\`

| 特性/版本    | Vue 2.x                                     | Vue 3.x                                                                  |
| ------------ | ------------------------------------------- | ------------------------------------------------------------------------ |
| 定义位置     | 在 Vue 实例的\`options.watch\`对象中          | 在\`setup()\`函数内部使用\`watch\`函数                                       |
| 监听单个属性 | 通过属性名设置回调函数                      | 直接传入响应式引用（如\`ref\`或\`reactive\`对象的属性）和回调函数            |
| 监听多个属性 | 数组语法，包含属性名和回调                  | 传入一个计算属性（返回一个对象或数组）和回调函数                         |
| 深度监听     | 在监听对象中设置\`deep: true\`                | 在第三个参数（选项对象）中设置\`deep: true\`                               |
| 立即执行     | 在监听对象中设置\`immediate: true\`           | 在第三个参数（选项对象）中设置\`immediate: true\`                          |
| 回调函数     | 接收新值和旧值作为参数                      | 根据监听的值类型，参数可能是新值和旧值组成的数组或对象                   |
| 清理机制     | 可通过\`vm.$watch\`返回的\`unwatch\`函数清理    | \`watch\`函数返回一个停止监听的函数，调用该函数可以清理监听器              |
| flush 选项   | 存在（但不常用），可设置为\`&#39;pre&#39;\`或\`&#39;post&#39;\` | 在第三个参数（选项对象）中设置\`flush: &#39;pre&#39;\`或\`&#39;post&#39;\`以控制回调执行时机 |
| API 灵活性   | 较低，受限于选项对象                        | 较高，支持多种使用方式，如计算属性和匿名函数                             |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),a=[s];function r(t,c){return n(),d("div",null,a)}const u=e(l,[["render",r],["__file","vue基础.html.vue"]]);export{u as default};
