# Node.js

## 概念

Node.js是一个基于Chrome V8引擎的JavaScript运行时环境，它使JavaScript能够在服务器端运行，与传统的浏览器端JavaScript不同，Node.js提供了一组强大的内置模块和工具，可以用于开发服务器端应用程序。

## 特点

1. 异步非阻塞I/O模型
2. 单线程
3. 轻量高效
4. 丰富的模块生态

## 引入模块

1. `require`（CommonJS）
   1. 用法：`const module = require('module-name')`
   2. 同步的，会阻塞代码直至所需模块加载完成
2. `import`（ES6模块）
   1. 用法：`import module from 'module-name'`
   2. 异步的，不会阻塞代码执行
3. 区别
   1. 语法：`require`使用函数调用的形式，`import`使用关键字
   2. 声明提升：`require`是运行时执行的，`import`是编译时执行的，这就意味着所有的`require`语句都会被提升到作用域的顶部，而`import`不会受限制
   3. 导出多个成员：`require`引入的模块可以导出多个成员，可通过对象属性的形式访问，而 `import`引入的模块每个成员需要单独导入
   4. 动态导入：`import`是动态导入的，可以在运行时动态加载模块，`require`不支持动态导入