---
sidebar: auto
---
# express

## 一、基本

### 0.安装

```
npm i express@4.17.1
```



### 1.基本服务

```js
const express = require('express')
const app = express()
app.listen(80,()=>{
    console.log('服务启动','http://127.0.0.1/')
})
```



### 2.nodemon

安装

```
npm i -g nodemon
```

使用

```
node  app.js
nodemon app.js
```

### 3.静态资源

公开up目录下的文件

```js
app.use(express.static('up'))
```

## 二、路由

### 1.路由使用

在 Express 中，路由指的是客户端的请求与服务器处理函数之间的映射关系。

```js
app.get('/xxx',(req,res)=>{
    res.send('xxx')
})
app.post('/xxx',(req,res)=>{
    res.send('xxx')
})
```

### 2.路由模块化

router.js

```js
const express = require('express')
const router = express.Router()

router.get('/user/list',(req,res)=>{
    res.send('getList')
})

router.post('/user/add',(req,res)=>{
    res.send('addList')
})

module.exports = router
```

使用

```js
const express = require('express')
const app = express()
const router = require('./router')

app.use(router)

app.listen(80,()=>{
    console.log('服务启动','http://127.0.0.1/')
})
```

添加路径前缀

```js
app.use('/api',router)
```

3.中间件

```js
const mw = function (req, res, next) {
    console.log('中间件')
    next()
}
app.use(mw)
```

注意：在路由之前注册中间件