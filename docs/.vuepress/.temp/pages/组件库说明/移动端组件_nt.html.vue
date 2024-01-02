<template><div><h1 id="移动端组件使用说明" tabindex="-1"><a class="header-anchor" href="#移动端组件使用说明" aria-hidden="true">#</a> 移动端组件使用说明</h1>
<h2 id="nt-moblie-form" tabindex="-1"><a class="header-anchor" href="#nt-moblie-form" aria-hidden="true">#</a> nt-moblie-form</h2>
<h3 id="表单属性-form-attributes" tabindex="-1"><a class="header-anchor" href="#表单属性-form-attributes" aria-hidden="true">#</a> 表单属性 Form Attributes</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">可选值</th>
<th style="text-align:left">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">model</td>
<td style="text-align:left">表单数据对象</td>
<td style="text-align:left">object</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">inline</td>
<td style="text-align:left">行内表单模式</td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">—</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">labelPosition</td>
<td style="text-align:left">表单域标签的位置，如果值为 left 或者 right 时，则需要设置 <code v-pre>label-width</code></td>
<td style="text-align:left">string</td>
<td style="text-align:left">right/left/top</td>
<td style="text-align:left">right</td>
</tr>
<tr>
<td style="text-align:left">labelWidth</td>
<td style="text-align:left">表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 <code v-pre>auto</code>。</td>
<td style="text-align:left">string</td>
<td style="text-align:left">—</td>
<td style="text-align:left">100px</td>
</tr>
<tr>
<td style="text-align:left">validate-on-rule-change</td>
<td style="text-align:left">是否在 <code v-pre>rules</code> 属性改变后立即触发一次验证</td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">—</td>
<td style="text-align:left">true</td>
</tr>
<tr>
<td style="text-align:left">fromDisabled</td>
<td style="text-align:left">是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效</td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">—</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">isProtect</td>
<td style="text-align:left">是否开启表单输入保护，默认开启（具备防范sql注入及跨站脚本防攻击能力）</td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">—</td>
<td style="text-align:left">true</td>
</tr>
</tbody>
</table>
<h3 id="表单方法-form-methods" tabindex="-1"><a class="header-anchor" href="#表单方法-form-methods" aria-hidden="true">#</a> 表单方法 Form Methods</h3>
<table>
<thead>
<tr>
<th style="text-align:left">方法名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">validate</td>
<td style="text-align:left">对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise</td>
<td style="text-align:left">Function(callback: Function(boolean, object))</td>
</tr>
<tr>
<td style="text-align:left">validateField</td>
<td style="text-align:left">对部分表单字段进行校验的方法</td>
<td style="text-align:left">Function(props: array | string, callback: Function(errorMessage: string))</td>
</tr>
<tr>
<td style="text-align:left">resetFields</td>
<td style="text-align:left">对整个表单进行重置，将所有字段值重置为初始值并移除校验结果</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">clearValidate</td>
<td style="text-align:left">移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果</td>
<td style="text-align:left">Function(props: array | string)</td>
</tr>
</tbody>
</table>
<h3 id="表单事件-form-events" tabindex="-1"><a class="header-anchor" href="#表单事件-form-events" aria-hidden="true">#</a> 表单事件 Form Events</h3>
<table>
<thead>
<tr>
<th style="text-align:left">事件名称</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">validate</td>
<td style="text-align:left">任一表单项被校验后触发</td>
<td style="text-align:left">被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）</td>
</tr>
</tbody>
</table>
<h3 id="表单项属性-form-item-attributes" tabindex="-1"><a class="header-anchor" href="#表单项属性-form-item-attributes" aria-hidden="true">#</a> 表单项属性 Form-Item Attributes</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">可选值</th>
<th style="text-align:left">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">表单项类型</td>
<td style="text-align:left">string</td>
<td style="text-align:left">input/select/date/time-select</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">prop</td>
<td style="text-align:left">表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的</td>
<td style="text-align:left">string</td>
<td style="text-align:left">传入 Form 组件的 <code v-pre>model</code> 中的字段</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">label</td>
<td style="text-align:left">标签文本</td>
<td style="text-align:left">string</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">labelWidth</td>
<td style="text-align:left">表单域标签的的宽度，例如 '50px'。支持 <code v-pre>auto</code>。</td>
<td style="text-align:left">string</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">required</td>
<td style="text-align:left">是否必填，如不设置，则会根据校验规则自动生成</td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">—</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">error</td>
<td style="text-align:left">表单域验证错误信息, 设置该值会使表单验证状态变为<code v-pre>error</code>，并显示该错误信息</td>
<td style="text-align:left">string</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">size</td>
<td style="text-align:left">用于控制该表单域下组件的尺寸</td>
<td style="text-align:left">string</td>
<td style="text-align:left">medium / small / mini</td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
<h3 id="form-item-methods" tabindex="-1"><a class="header-anchor" href="#form-item-methods" aria-hidden="true">#</a> Form-Item Methods</h3>
<table>
<thead>
<tr>
<th style="text-align:left">方法名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">resetField</td>
<td style="text-align:left">对该表单项进行重置，将其值重置为初始值并移除校验结果</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">clearValidate</td>
<td style="text-align:left">移除该表单项的校验结果</td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nt-mobile-form</span> 
<span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formRef<span class="token punctuation">"</span></span> 
<span class="token attr-name">configs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{formConfigs}}<span class="token punctuation">"</span></span> 
<span class="token attr-name">model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{formModel}}<span class="token punctuation">"</span></span>
<span class="token attr-name">defaultData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{formDefaultData}}<span class="token punctuation">"</span></span>
<span class="token attr-name">@handleConfirm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleFormConfirm<span class="token punctuation">"</span></span>
<span class="token attr-name">confirmLoading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{confirmLoading}}<span class="token punctuation">"</span></span>
<span class="token attr-name">isProtect</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{false}}<span class="token punctuation">"</span></span>
<span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nt-mobile-form</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>Page({
    data: {
        val1: '',
        formModel: {
        },
        // 禁用表单
        fromDisabled: true,
        // 确认按钮加载
        confirmLoading: false,
        // 表单加载
        formLoading:false,
        // 表单项默认数据
        formDefaultData: {},
        // 对话框
        formDefaultData: { // 对话框表单
            form: {}
        },    
    },
    computed: {
        // 对话框配置
        formConfigs() {
            return [
                {
                    type: "input", prop: "test11", label: "测试11", rules: [
                        { required: true, message: "请输入测试", trigger: "change" },
                    ]
                },
      
                { type: "select", prop: "test3", label: "测试3", options: { 0: "0", 1: "1" } },
                { type: "date", prop: "test4", label: "测试4" },
                { type: "time-select", prop: "test5", label: "测试5" },
            ]
        }
    },

    handleFormConfirm(e) {
        // console.log('看下e', e);
        this.confirmLoading = true
        setInterval(()=>{
            this.confirmLoading = false;
        },5000)
    },

    handleBlur(event) {
        // 处理失去焦点事件
        // console.log('失去焦点事件：', event);
    },
    handleFocus(event) {
        // 处理获得焦点事件
        // console.log('获得焦点事件：', event);
    },
    handleChange(value) {
        // 处理 change 事件
        // console.log('change 事件：', value);
    },
    handleInput(value) {
        // 处理 input 事件
        // console.log('input 事件：', value);
    },
    handleClear() {
        // 处理清空按钮点击事件
        // console.log('清空按钮点击事件');
    }

})

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nt-mobile-input" tabindex="-1"><a class="header-anchor" href="#nt-mobile-input" aria-hidden="true">#</a> nt-mobile-input</h2>
<h3 id="输入框属性-input-attributes" tabindex="-1"><a class="header-anchor" href="#输入框属性-input-attributes" aria-hidden="true">#</a> 输入框属性 Input Attributes</h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">可选值</th>
<th style="text-align:left">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">类型</td>
<td style="text-align:left">string</td>
<td style="text-align:left">text，Email，number，password，tel</td>
<td style="text-align:left">text</td>
</tr>
<tr>
<td style="text-align:left">value / v-model</td>
<td style="text-align:left">绑定值</td>
<td style="text-align:left">string / number</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">maxlength</td>
<td style="text-align:left">原生属性，最大输入长度</td>
<td style="text-align:left">number</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">minlength</td>
<td style="text-align:left">原生属性，最小输入长度</td>
<td style="text-align:left">number</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">placeholder</td>
<td style="text-align:left">输入框占位文本</td>
<td style="text-align:left">string</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">clearable</td>
<td style="text-align:left">是否可清空</td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">—</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">showPassword</td>
<td style="text-align:left">是否显示切换密码图标</td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">—</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">disabled</td>
<td style="text-align:left">禁用</td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">—</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">原生属性</td>
<td style="text-align:left">string</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">readonly</td>
<td style="text-align:left">原生属性，是否只读</td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">—</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">max</td>
<td style="text-align:left">原生属性，设置最大值</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">min</td>
<td style="text-align:left">原生属性，设置最小值</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">step</td>
<td style="text-align:left">原生属性，设置输入字段的合法数字间隔</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">autofocus</td>
<td style="text-align:left">原生属性，自动获取焦点</td>
<td style="text-align:left">boolean</td>
<td style="text-align:left">true, false</td>
<td style="text-align:left">false</td>
</tr>
<tr>
<td style="text-align:left">form</td>
<td style="text-align:left">原生属性</td>
<td style="text-align:left">string</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
<tr>
<td style="text-align:left">label</td>
<td style="text-align:left">输入框关联的label文字</td>
<td style="text-align:left">string</td>
<td style="text-align:left">—</td>
<td style="text-align:left">—</td>
</tr>
</tbody>
</table>
<h3 id="输入框事件-input-events" tabindex="-1"><a class="header-anchor" href="#输入框事件-input-events" aria-hidden="true">#</a> 输入框事件 Input Events</h3>
<table>
<thead>
<tr>
<th style="text-align:left">事件名称</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">blur-event</td>
<td style="text-align:left">在 Input 失去焦点时触发</td>
<td style="text-align:left">(event: Event)</td>
</tr>
<tr>
<td style="text-align:left">focus-event</td>
<td style="text-align:left">在 Input 获得焦点时触发</td>
<td style="text-align:left">(event: Event)</td>
</tr>
<tr>
<td style="text-align:left">change-event</td>
<td style="text-align:left">仅在输入框失去焦点或用户按下回车时触发</td>
<td style="text-align:left">(value: string | number)</td>
</tr>
<tr>
<td style="text-align:left">input-event</td>
<td style="text-align:left">在 Input 值改变时触发</td>
<td style="text-align:left">(value: string | number)</td>
</tr>
<tr>
<td style="text-align:left">clear-event</td>
<td style="text-align:left">在点击由 <code v-pre>clearable</code> 属性生成的清空按钮时触发</td>
<td style="text-align:left">—</td>
</tr>
</tbody>
</table>
<h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3>
</div></template>


