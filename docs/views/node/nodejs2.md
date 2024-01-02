---
sidebar: auto
---

# nodejs基础

## 一、node api

### 1.fs

fs读取文件内容

fs.readFile()

__dirname 当前文件所在目录

```js
const fs = require('fs')
fs.readFile(__dirname + '/up/123.txt', 'utf8', function (err, data) {
    if (err) {
        console.log(err)
    }
    console.log(data)
})
```

写入内容

fs.writeFile()

```js
fs.writeFile('./up/123.txt','qwer','utf8',function(err){
    console.log(err)
})
```

### 2.path

path.join 路径拼接

```js
let url = path.join(__dirname, '/up/123.txt')
```

path.basename("xxx.txt",'.txt') 返回文件名

path.extname()   获取文件扩展名

### 3.http

```js
//导入
var http = require('http');
// 创建web服务
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8888);
```

```js
var http = require('http');
const server = http.createServer()
server.on('request',(req,res)=>{
    res.setHeader("Content-Type", "text/html;charset=utf-8")
})
server.listen(8080,()=>{})
```

Content-Type：

text/html：HTML格式。

application/json：JSON数据格式。