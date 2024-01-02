---
title:移动端组件使用文档
author:王洪
date:2023-09-27
---

# 移动端组件使用说明

## nt-moblie-form

### 表单属性 Form Attributes

| 参数                    | 说明                                                         | 类型    | 可选值         | 默认值 |
| :---------------------- | :----------------------------------------------------------- | :------ | :------------- | :----- |
| model                   | 表单数据对象                                                 | object  | —              | —      |
| inline                  | 行内表单模式                                                 | boolean | —              | false  |
| labelPosition           | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width` | string  | right/left/top | right  |
| labelWidth              | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 `auto`。 | string  | —              | 100px  |
| validate-on-rule-change | 是否在 `rules` 属性改变后立即触发一次验证                    | boolean | —              | true   |
| fromDisabled            | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效 | boolean | —              | false  |
| isProtect               | 是否开启表单输入保护，默认开启（具备防范sql注入及跨站脚本防攻击能力） | boolean | —              | true   |

### 表单方法 Form Methods

| 方法名        | 说明                                                         | 参数                                                         |
| :------------ | :----------------------------------------------------------- | :----------------------------------------------------------- |
| validate      | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise | Function(callback: Function(boolean, object))                |
| validateField | 对部分表单字段进行校验的方法                                 | Function(props: array \| string, callback: Function(errorMessage: string)) |
| resetFields   | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果   | —                                                            |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果 | Function(props: array \| string)                             |

### 表单事件 Form Events

| 事件名称 | 说明                   | 回调参数                                                   |
| :------- | :--------------------- | :--------------------------------------------------------- |
| validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在） |

### 表单项属性 Form-Item Attributes

| 参数       | 说明                                                         | 类型    | 可选值                            | 默认值 |
| :--------- | :----------------------------------------------------------- | :------ | :-------------------------------- | :----- |
| type       | 表单项类型                                                   | string  | input/select/date/time-select     | —      |
| prop       | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string  | 传入 Form 组件的 `model` 中的字段 | —      |
| label      | 标签文本                                                     | string  | —                                 | —      |
| labelWidth | 表单域标签的的宽度，例如 '50px'。支持 `auto`。               | string  | —                                 | —      |
| required   | 是否必填，如不设置，则会根据校验规则自动生成                 | boolean | —                                 | false  |
| error      | 表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息 | string  | —                                 | —      |
| size       | 用于控制该表单域下组件的尺寸                                 | string  | medium / small / mini             | -      |

###  

###  Form-Item Methods

| 方法名        | 说明                                                 | 参数 |
| :------------ | :--------------------------------------------------- | :--- |
| resetField    | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | -    |
| clearValidate | 移除该表单项的校验结果                               | -    |

### 示例

```vue
<nt-mobile-form 
ref="formRef" 
configs="{{formConfigs}}" 
model="{{formModel}}"
defaultData="{{formDefaultData}}"
@handleConfirm="handleFormConfirm"
confirmLoading="{{confirmLoading}}"
isProtect="{{false}}"
>
</nt-mobile-form>
```



```vue
Page({
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

```



## nt-mobile-input

### 输入框属性 Input Attributes

| 参数            | 说明                                 | 类型            | 可选值                             | 默认值 |
| :-------------- | :----------------------------------- | :-------------- | :--------------------------------- | :----- |
| type            | 类型                                 | string          | text，Email，number，password，tel | text   |
| value / v-model | 绑定值                               | string / number | —                                  | —      |
| maxlength       | 原生属性，最大输入长度               | number          | —                                  | —      |
| minlength       | 原生属性，最小输入长度               | number          | —                                  | —      |
| placeholder     | 输入框占位文本                       | string          | —                                  | —      |
| clearable       | 是否可清空                           | boolean         | —                                  | false  |
| showPassword    | 是否显示切换密码图标                 | boolean         | —                                  | false  |
| disabled        | 禁用                                 | boolean         | —                                  | false  |
| name            | 原生属性                             | string          | —                                  | —      |
| readonly        | 原生属性，是否只读                   | boolean         | —                                  | false  |
| max             | 原生属性，设置最大值                 | —               | —                                  | —      |
| min             | 原生属性，设置最小值                 | —               | —                                  | —      |
| step            | 原生属性，设置输入字段的合法数字间隔 | —               | —                                  | —      |
| autofocus       | 原生属性，自动获取焦点               | boolean         | true, false                        | false  |
| form            | 原生属性                             | string          | —                                  | —      |
| label           | 输入框关联的label文字                | string          | —                                  | —      |



### 输入框事件 Input Events

| 事件名称     | 说明                                          | 回调参数                  |
| :----------- | :-------------------------------------------- | :------------------------ |
| blur-event   | 在 Input 失去焦点时触发                       | (event: Event)            |
| focus-event  | 在 Input 获得焦点时触发                       | (event: Event)            |
| change-event | 仅在输入框失去焦点或用户按下回车时触发        | (value: string \| number) |
| input-event  | 在 Input 值改变时触发                         | (value: string \| number) |
| clear-event  | 在点击由 `clearable` 属性生成的清空按钮时触发 | —                         |

### 示例

