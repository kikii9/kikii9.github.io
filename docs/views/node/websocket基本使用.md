---
sidebar: auto
---

# websocket基本使用

## node服务端

安装 npm i nodejs-websocket

运行 node .\app.js

```js
const ws = require('nodejs-websocket')
const port = 3000

// 连接总数
let count = 0

const server = ws.createServer(connect => {
    console.log('有用户来了')
    count++
    connect.userName = '用户' + count
    broadcast(1,connect.userName + '进入了聊天室')




    connect.on('text', data => {
        console.log('接收到用户的数据', data)
        broadcast(2,'发送的是' + data)
    })
    connect.on('close', () => {
        console.log('连接断开')
        count--
        broadcast(0,connect.userName + '离开了聊天室')
    })
    connect.on('error', () => {
        console.log('连接异常')
    })
})

//给所有用户发送消息
function broadcast(type,msg) {
    let msgObj = {
        type,
        msg,
        time:new Date().toLocaleTimeString()
    }
    server.connections.forEach(item => {
        item.send(JSON.stringify(msgObj))
    })
}


server.listen(port, () => {
    console.log('服务启动')
})
```



## uniapp客户端

```vue
<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="btn">连接</button>
		<view v-if="socketOpen">已连接</view>
		<view class="" v-else>未连接</view>
		<view class="box">
			<input type="text" class="input" v-model="str" placeholder="输入">
			<button @click="send">发送</button>
			<view class="">
				<view class="" v-for="(item,index) in socketMsgQueue" :key="index">
					{{item}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				str: '',
				socketOpen: false,
				socketMsgQueue: [],
			}
		},
		onLoad() {
			uni.onSocketOpen((res)=> {
				this.socketOpen = true
				console.log(this.socketOpen)
				console.log('WebSocket连接已打开！');
			});
			uni.onSocketError((res)=> {
				this.socketOpen = false
				console.log('WebSocket连接打开失败，请检查！');
			});
			uni.onSocketMessage((res)=>{
			  console.log('收到服务器内容：' + res.data);
			  let list = this.socketMsgQueue
			  list.push(res.data)
			  this.socketMsgQueue = list
			});
		},
		methods: {
			btn() {
				uni.connectSocket({
					url: 'ws://localhost:3000'
				});			
			},
			send() {
				let msg = this.str
				if (this.socketOpen) {
					this.str = ''
					uni.sendSocketMessage({
						data: msg
					});
				} else {
					// socketMsgQueue.push(msg);
				}
			}
		},
	}
</script>
```

