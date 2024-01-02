# JavaScript

## 20230925

### 数组常用方法

#### 会改变原数组的方法

- push
  - 末尾添加数据
- pop
  - 末尾删除数据
- unshift
  - 头部添加数据
- shift
  - 头部删除数据
- reverse
  - 翻转数组
- sort
  - 排序
- splice
  - 截取数组

#### 不会改变原数组的方法

- concat
  - 合并数组
- join
  - 数组转字符串
- slice
  - 截取数组中的部分数据
- indexOf
  - 从左检查数组是否有这个数值
- lastIndexOf
  - 从右检查数组是否有这个数值

### ES6新增数组方法

- forEach
  - 遍历循环
- map
  - 映射数组
- filter
  - 过滤数组
- every
  - 判断数组是否满足所有条件
- some
  - 数组有无满足条件的
- find
  - 用来获取数组中满足条件的
- reduce
  - 叠加后的效果

## null和undefined的区别

### null

- JavaScript基本类型之一，特指对象的值未设置，是表示缺少的标识，指示变量未指向任何对象，可理解为尚未创建的对象
- 是一个字面量，不像undefined，它不是一个全局变量的属性
- 在布尔值运算中被认为是false
- 与其他任何对象一样永远不会被JavaScript隐式赋值给变量
- **典型用法**
  - 作为函数参数，表示该参数为空
  - 作为对象原型链的终点

## Object.keys

[Object.keys() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)

## Object.values

[Object.values() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

## Object.entries

[Object.entries() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
