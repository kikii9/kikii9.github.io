---
sidebar: auto
---

# request封装



## 1.            utils/request.js

封装请求方法

```js
const Tips = (title) => {
	uni.showToast({
		title
	})
}
// const baseURL = process.env.NODE_ENV === 'development' ? "/dev-api" : "https://www.xxx.cn";

export default async function request(params) {
	return new Promise((reslove, reject) => {
		uni.request({
			url: baseURL + params.url,
			method: params.method,
			header: {
				'Content-Type': 'application/json',
				// 'Token': uni.getStorageSync('TOKEN')
			},
			data: params.data,
			success: (res) => {
				// if (res.code == 1) {
				// 	reslove(res.data);
				// }
				reslove(res.data);
			},
			fail: (err) => {
				return Tips('连接失败，请稍后再试！');
			}
		})
	})
}
```



## 2.                api/users.js

封装api接口

```js
import request from "../utils/request.js";

export function getList(params) {
    return request({
        url: '/users/getList',
        method: 'GET',
        data: {
            params
        },
    })
}

export function getInfo(data) {
    return request({
        url: '/users/getInfo',
        method: 'POST',
        data
    })
}
```

## 3.页面中使用

```js
import {
		getList,getInfo
	} from '../../api/users.js'

	btntest() {
		getList().then(res => {
			console.log(res)
		})
	}
```

