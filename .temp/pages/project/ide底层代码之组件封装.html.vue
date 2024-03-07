<template><div><h1 id="ide底层代码之组件封装" tabindex="-1"><a class="header-anchor" href="#ide底层代码之组件封装" aria-hidden="true">#</a> ide底层代码之组件封装</h1>
<p>开发周期：20230925-至今</p>
<p>项目概述：技术栈-vue+electron+elementui，南天自研ide开发工具，可开发移动端以及pc端的小程序</p>
<p>难度：⭐⭐⭐⭐</p>
<p>繁琐程度：⭐⭐</p>
<p>相关知识点：</p>
<ul>
<li>封装input组件（防止重复提交及接口调用等待，输入安全-防攻击）</li>
<li>开发高阶插件/组件库的时候使用的通信方法【provide】【inject】</li>
<li>防抖和节流</li>
</ul>
<h2 id="_20230926" tabindex="-1"><a class="header-anchor" href="#_20230926" aria-hidden="true">#</a> 20230926</h2>
<h3 id="当浏览器的历史记录状态发生变化时-如前进、后退按钮被点击" tabindex="-1"><a class="header-anchor" href="#当浏览器的历史记录状态发生变化时-如前进、后退按钮被点击" aria-hidden="true">#</a> 当浏览器的历史记录状态发生变化时（如前进、后退按钮被点击）</h3>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code> mounted() {
        var _this = this;
        window.addEventListener("popstate", function () {
            try {
                _this.formatValue = ""
            } catch (e) {
            }
        })
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用的注释有哪些" tabindex="-1"><a class="header-anchor" href="#常用的注释有哪些" aria-hidden="true">#</a> 常用的注释有哪些</h3>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre v-pre class="language-vue"><code>@param：用于描述函数或方法的参数，包括参数的名称、类型、描述等。
@returns：用于描述函数或方法的返回值类型和含义。
@throws：用于描述函数或方法可能抛出的异常类型和描述。
@example：用于提供函数或方法的使用示例。
@description 或 @desc：用于提供函数或方法的详细描述。
@deprecated：用于标记已废弃的函数或方法。
@inheritdoc：用于继承父类或实现接口的函数或方法，继承父类或接口的注释。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@param</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
/**
 * 计算两个数字的和
 * @param {number} num1 - 第一个数字
 * @param {number} num2 - 第二个数字
 * @returns {number} - 返回两个数字的和
 */
function add(num1, num2) {
  return num1 + num2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@returns</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
 * 生成一个随机数
 * @returns {number} - 返回一个随机的整数
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@throws</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
 * 除法运算
 * @param {number} dividend - 被除数
 * @param {number} divisor - 除数
 * @returns {number} - 返回除法运算的结果
 * @throws {Error} - 如果除数为零，则抛出错误
 */
function divide(dividend, divisor) {
  if (divisor === 0) {
    throw new Error('除数不能为零');
  }
  return dividend / divisor;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@example</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>
/**
 * 将字符串反转
 * @param {string} str - 输入的字符串
 * @returns {string} - 返回反转后的字符串
 *
 * @example
 * // 示例1
 * reverseString('Hello') // 输出: 'olleH'
 *
 * @example
 * // 示例2
 * reverseString('JavaScript') // 输出: 'tpircSavaJ'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@description</code> 或 <code v-pre>@desc</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
 * 将字符串转换为大写，并添加感叹号结尾。
 *
 * @param {string} str - 输入的字符串
 * @returns {string} - 返回转换后的字符串
 *
 * @description 该函数将给定的字符串转换为大写，并在末尾添加一个感叹号。注意：该函数不会修改原始字符串，而是返回一个新的字符串。
 */
function convertToUpperCase(str) {
  return str.toUpperCase() + '!';
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@deprecated</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>javascriptCopy Code/**
 * @deprecated 该函数已废弃，请使用新的 addNumbers 函数
 */
function add(num1, num2) {
  return num1 + num2;
}

/**
 * 计算两个数字的和
 * @param {number} num1 - 第一个数字
 * @param {number} num2 - 第二个数字
 * @returns {number} - 返回两个数字的和
 */
function addNumbers(num1, num2) {
  return num1 + num2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@inheritdoc</code></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>javascriptCopy Code/**
 * 父类的构造函数
 * @class
 */
class Parent {
  /**
   * @param {string} name - 名称
   */
  constructor(name) {
    this.name = name;
  }

  // ...
}

/**
 * 子类继承父类并添加额外的方法
 * @class
 * @inheritdoc
 */
class Child extends Parent {
  /**
   * @param {string} name - 名称
   * @param {number} age - 年龄
   */
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  /**
   * 输出姓名和年龄
   */
  printInfo() {
    console.log(`姓名: ${this.name}, 年龄: ${this.age}`);
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_20230927" tabindex="-1"><a class="header-anchor" href="#_20230927" aria-hidden="true">#</a> 20230927</h2>
<p>最近想考个雅思</p>
<h3 id="防抖节流" tabindex="-1"><a class="header-anchor" href="#防抖节流" aria-hidden="true">#</a> 防抖节流</h3>
</div></template>


