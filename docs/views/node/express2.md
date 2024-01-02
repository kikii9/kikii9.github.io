---
sidebar: auto
---

# nodejs服务端

使用nodejs做后端，写接口操作数据库，前端请求接口。

## 一、后端

### 1.安装express

新建项目目录 cmd：

express

npm i

运行后 http://localhost:3000/

### 2.安装一些依赖

package.json

```json
 "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon bin/www"
  },
  "dependencies": {
    "body-parser": "^1.18.3",
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "express": "~4.16.1",
    "http-errors": "~1.6.3",
    "jade": "~1.11.0",
    "morgan": "~1.9.1",
    "mysql": "^2.18.1",
    "nodemon": "^2.0.15"
  }
```

### 3.routes 创建路由

#### 获取数据 

getUser.js

```js
var express = require('express');
var router = express.Router();
// var url = require('url')
// var querystring = require('querystring')

/* GET users listing. */
router.get('/', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");

    var mysql = require('mysql')
    var connection = mysql.createConnection({
        host: 'localhost',
        port: '3306', //端口号
        user: 'root',
        password: '654321',
        database: 'db1'
    })
    connection.connect()
    connection.query("SELECT * FROM user", function (err, data) {
        if (err) {
            console.log("数据库访问出错", err);
        } else {
            res.send({
                code: 1,
                msg: "成功",
                data
            });
            // var query = url.parse(req.url).query
            // var queryObj = querystring.parse(query)
            // console.log(queryObj)
        }
    })
    connection.end()


});

module.exports = router;
```

#### 新增数据 

addUser.js

```js
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");

    let one = JSON.parse(Object.keys(req.body)[0])
    console.log(one)
    one.likes = one.likes.join(",")
    console.log(one.likes)
    let data = {
        code: 1,
        msg: '成功',
        data: one
    }

    var mysql = require('mysql')
    var connection = mysql.createConnection({
        host: 'localhost',
        port: '3306', //端口号
        user: 'root',
        password: '654321',
        database: 'db1'
    })
    connection.connect()
    connection.query("INSERT INTO user SET ?", data.data, function (error, results, fields) {
        if (error) {
            console.log("数据库访问出错", error);
        } else {
            res.send(data);
        }
    })
    connection.end()

});

module.exports = router;
```

#### 修改数据

editUser.js

```js
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");

    let one = JSON.parse(Object.keys(req.body)[0])
    one.likes = one.likes.join(",")
    let data = {
        code: 1,
        msg: '成功',
        data: one
    }
    console.log(data.data)
    var mysql = require('mysql')
    var connection = mysql.createConnection({
        host: 'localhost',
        port: '3306', //端口号
        user: 'root',
        password: '654321',
        database: 'db1'
    })
    connection.connect()
    connection.query("UPDATE user SET name = ? ,age = ? ,likes = ? where id = ?", [
        data.data.name,
        data.data.age,
        data.data.likes,
        data.data.id
    ], function (error, results, fields) {
        if (error) {
            console.log("数据库访问出错", error);
        } else {
            res.send(data);
        }
    })
    connection.end()
});

module.exports = router;
```

#### 删除数据

delUser.js

```js
var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");

    let one = JSON.parse(Object.keys(req.body)[0])
    let data = {
        code: 1,
        msg: '成功',
        data: one
    }
    // console.log(one)

    var mysql = require('mysql')
    var connection = mysql.createConnection({
        host: 'localhost',
        port: '3306', //端口号
        user: 'root',
        password: '654321',
        database: 'db1'
    })
    connection.connect()
    connection.query("DELETE FROM user where id=?", data.data.id, function (error, results, fields) {
        if (error) {
            console.log("数据库访问出错", error);
        } else {
            res.send(data);
        }
    })
    connection.end()

});

module.exports = router;
```

### 4.引入路由

app.js

```js
app.use('/addUser', require('./routes/addUser'));
app.use('/getUser', require('./routes/getUser'));
app.use('/delUser', require('./routes/delUser'));
app.use('/editUser', require('./routes/editUser'));


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: true
}))
```

## 二、数据库

​	host: 'localhost',

​    port: '3306', //端口号

​    user: 'root',

​    password: '654321',

​    database: 'db1'

db1

表：

id:1,

name:'...',

age:18,

like:'...'

## 三、前端

```vue
<template>
  <div>
    <div class="box">
      <div>刷新数据<button @click="getData">刷新</button></div>
      <!-- <div>添加数据<button @click="addData">添加</button></div> -->
      <h2>用户数据</h2>
      <div>
        <div class="item" v-for="item in list" :key="item.id">
          <div>id：{{ item.id }}</div>
          <div>名字：{{ item.name }}</div>
          <div>年龄：{{ item.age }}</div>
          <div class="likes">
            爱好:
            <div v-for="e in item.likes" :key="e">{{ e }}</div>
          </div>
          <div>
            操作
            <button @click="edit(item.id)">编辑</button>
            <button @click="del(item.id)">删除</button>
          </div>
        </div>
        <button @click="showBtn">添加用户</button>
      </div>
      <div class="from" v-show="show">
        <h3>添加用户</h3>
        <div class="close" @click="gbBtn">关闭x</div>
        <div>姓名：<input type="text" v-model="name" /></div>
        <div>年龄：<input type="text" v-model="age" /></div>
        <div>
          爱好：
          <div>
            <input type="checkbox" value="吃饭" v-model="likes" />
            <label>吃饭</label>
            <input type="checkbox" value="睡觉" v-model="likes" />
            <label>睡觉</label>
            <input type="checkbox" value="唱歌" v-model="likes" />
            <label>唱歌</label>
          </div>
        </div>
        <button class="addBtn" @click="addData">确定</button>
      </div>
      <div class="from" v-show="show1">
        <h3>编辑用户</h3>
        <div class="close" @click="gbBtn">关闭x</div>
        <div>姓名：<input type="text" v-model="name" /></div>
        <div>年龄：<input type="text" v-model="age" /></div>
        <div>
          爱好：
          <div>
            <input type="checkbox" value="吃饭" v-model="likes" />
            <label>吃饭</label>
            <input type="checkbox" value="睡觉" v-model="likes" />
            <label>睡觉</label>
            <input type="checkbox" value="唱歌" v-model="likes" />
            <label>唱歌</label>
          </div>
        </div>
        <button class="addBtn" @click="editBtn">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  props: {},
  data() {
    return {
      show: false,
      show1: false,
      list: [],
      id: "",
      name: "",
      age: "",
      likes: [],
    };
  },
  watch: {},
  computed: {},
  methods: {
    showBtn() {
      this.show = true;
    },
    gbBtn() {
      this.show = false;
      this.show1 = false;
      this.id = "";
      this.name = "";
      this.age = "";
      this.likes = [];
    },
    getData() {
      let that = this;
      axios
        .get("http://192.168.10.52:3000/getuser")
        .then(function (response) {
          if (response.data.code == 1) {
            let list = response.data.data;
            list.forEach((e) => {
              if (e.likes) {
                let arr = e.likes.split(",");
                e.likes = arr;
              }
            });
            that.list = list;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    addData() {
      // let data = { name: "关羽", age: 22, likes: ["吃饭", "睡觉", "唱歌"] };
      let obj = {
        name: this.name,
        age: parseInt(this.age),
        likes: this.likes,
      };
      this.gbBtn()
      axios
        .post("http://192.168.10.52:3000/addUser", obj, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.code == 1) {
            this.getData();
          }
        });
    },
    del(id) {
      let data = {
        id,
      };
      axios
        .post("http://192.168.10.52:3000/delUser", data, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.code == 1) {
            this.getData();
          }
        });
    },
    edit(id) {
      this.show1 = true;
      this.id = id;
      this.list.forEach((e) => {
        if (e.id == id) {
          this.name = e.name;
          this.age = e.age;
          this.likes = e.likes;
        }
      });
    },
    editBtn() {
      let obj = {
        id: this.id,
        name: this.name,
        age: parseInt(this.age),
        likes: this.likes,
      };
      console.log(obj)
      this.gbBtn()
      axios
        .post("http://192.168.10.52:3000/editUser", obj, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.code == 1) {
            this.getData();
          }
        });
    },
  },
  created() {
    this.getData();
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.box {
  width: 600px;
  padding-bottom: 40px;
  border: 1px solid red;
  margin: 0 auto;
  position: relative;
  .item {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    .likes {
      display: flex;
      div {
        margin-left: 10px;
      }
    }
  }
  .from {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    background: #ccc;
    position: absolute;
    top: 100px;
    .close {
      text-align: right;
      margin-right: 10px;
      cursor: pointer;
    }
    .addBtn {
      margin-top: 20px;
    }
  }
}
</style>
```

