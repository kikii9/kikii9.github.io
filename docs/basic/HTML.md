# HTML

## 1. 什么是HTML

**用于描述网页的一种标记语言**

- Hyper Text Markup Language
- 不是编程语言,是一种标记语言
- HTML文档也叫做web页面

```html
<!DOCTYPE html> //指定文档类型为HTML
<html lang="en">//文档语言为英语

<head>

    //<meta> 标签用于提供有关 HTML 文档的元数据，例如页面有效期、页面作者、关键字列表、页面描述等信息。<meta> 标签定义的数据并不会显示在页面上，但却会被浏览器解析。

    <meta charset="UTF-8">//charset 属性用来指定 HTML 文档的字符编码

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>//有且仅有一个，仅允许包含纯文本内容，不能包含其他HTML标签

    <base href="http://kikii9.space/">//用于为页面中所有相对链接指定一个基本链接，当您设置了基本链接后，当前页面中的所有相对链接都会使用这个基本链接作为前缀

    <link rel="stylesheet" href="common.css">//用于引用外部 CSS 样式表，<link> 标签中包含两个主要的属性，分别是 rel 和 href。rel 属性用来指示引用文件的类型，href 属性用来设置外部文件的路径，可包含任意数量的<link>标签
<body>

</body>
</html>
```



 **meta的属性值**

| 属性       | 值                                                           | 描述                                   |
| ---------- | ------------------------------------------------------------ | -------------------------------------- |
| charset    | character_set                                                | 规定HTML文档的字符编码                 |
| content    | text                                                         | 定义与http-equip或name属性相关的元信息 |
| http-equip | content-security-policy <br />content-type<br /> default-style <br />refresh | 把 content 属性关联到 HTTP 头部。      |
| name       | application-name <br />author <br />description <br />generator<br /> keywords<br /> viewport | 把 content 属性关联到一个名称。        |
| scheme     | some_text                                                    | 定义用于翻译 content 属性值的格式。    |

