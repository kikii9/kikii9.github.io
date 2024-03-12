# ide底层代码之组件封装

开发周期：20230925-至今

项目概述：技术栈-vue+electron+elementui，南天自研ide开发工具，可开发移动端以及pc端的小程序

难度：⭐⭐⭐⭐

繁琐程度：⭐⭐

相关知识点：

- 封装input组件（防止重复提交及接口调用等待，输入安全-防攻击）
- 开发高阶插件/组件库的时候使用的通信方法【provide】【inject】
- 防抖和节流


## 20230926
### 当浏览器的历史记录状态发生变化时（如前进、后退按钮被点击）

```vue
 mounted() {
        var _this = this;
        window.addEventListener("popstate", function () {
            try {
                _this.formatValue = ""
            } catch (e) {
            }
        })
    }
```

### 常用的注释有哪些

```vue 
@param：用于描述函数或方法的参数，包括参数的名称、类型、描述等。
@returns：用于描述函数或方法的返回值类型和含义。
@throws：用于描述函数或方法可能抛出的异常类型和描述。
@example：用于提供函数或方法的使用示例。
@description 或 @desc：用于提供函数或方法的详细描述。
@deprecated：用于标记已废弃的函数或方法。
@inheritdoc：用于继承父类或实现接口的函数或方法，继承父类或接口的注释。
```
`@param`

```

/**
 * 计算两个数字的和
 * @param {number} num1 - 第一个数字
 * @param {number} num2 - 第二个数字
 * @returns {number} - 返回两个数字的和
 */
function add(num1, num2) {
  return num1 + num2;
}
```
`@returns`

```
/**
 * 生成一个随机数
 * @returns {number} - 返回一个随机的整数
 */
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}
```
`@throws`

```
/**
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
```
`@example`

```

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
```

 `@description` 或 `@desc`

```
/**
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
```
 `@deprecated`

```
javascriptCopy Code/**
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
```

 `@inheritdoc`

```
javascriptCopy Code/**
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
```

## 20230927

最近想考个雅思

### 防抖节流

