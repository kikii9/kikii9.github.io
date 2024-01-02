---
sidebar: auto
---

# uniapp支付功能

uni.requestPayment()

https://uniapp.dcloud.net.cn/api/plugins/payment.html#h5-payment

## 一.微信小程序中支付

1.登录

2.获取openid

3.创建订单，获取支付信息

4.发起支付

```js
// 仅作为示例，非真实参数信息。
uni.requestPayment({
    provider: 'wxpay', // 服务商
	timeStamp: String(Date.now()),  // 时间戳
	nonceStr: 'A1B2C3D4E5', // 随机字符串
	package: 'prepay_id=wx20180101abcdefg', // 统一订单号
	signType: 'MD5', // 签名算法
	paySign: '', // 签名
	success: function (res) {
		console.log('success:' + JSON.stringify(res));
	},
	fail: function (err) {
		console.log('fail:' + JSON.stringify(err));
	}
});

```



## 二.app中微信支付

1.登录

2.获取openid

3.创建订单，获取支付信息

4.发起支付

```js
uni.requestPayment({
    "provider": "wxpay",  // 服务商
    "orderInfo": {
        "appid": "wx499********7c70e",  // 微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致
        "noncestr": "c5sEwbaNPiXAF3iv", // 随机字符串
        "package": "Sign=WXPay",        // 固定值
        "partnerid": "148*****52",      // 微信支付商户号
        "prepayid": "wx202254********************fbe90000", // 统一下单订单号 
        "timestamp": 1597935292,        // 时间戳（单位：秒）
        "sign": "A842B45937F6EFF60DEC7A2EAA52D5A0" // 签名，这里用的 MD5/RSA 签名
    },
    success(res) {},
    fail(e) {}
})

```



## 三.app中支付宝支付

1.创建订单，获取支付信息

2.发起支付

```js
uni.requestPayment({
    provider: 'alipay',  // 服务商
    orderInfo: 'orderInfo', // 订单数据
    success: function (res) {
        console.log('success:' + JSON.stringify(res));
    },
    fail: function (err) {
        console.log('fail:' + JSON.stringify(err));
    }
});

```



## 四.h5中微信支付

微信内嵌浏览器运行H5版时，可通过js sdk实现微信支付

JSSDK 的使用方式

https://ask.dcloud.net.cn/article/35380

JS-SDK说明文档

https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html

### 微信支付

发起一个微信支付请求

```js
wx.chooseWXPay({
  timestamp: 0, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
  nonceStr: '', // 支付签名随机串，不长于 32 位
  package: '', // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
  signType: '', // 微信支付V3的传入RSA,微信支付V2的传入格式与V2统一下单的签名格式保持一致
  paySign: '', // 支付签名
  success: function (res) {
    // 支付成功后的回调函数
  }
});
```

备注：prepay_id 通过微信支付统一下单接口拿到，paySign 采用统一的微信支付 Sign 签名生成方法，注意这里 appId 也要参与签名，appId 与 config 中传入的 appId 一致，签名格式要求以微信支付文档为准。

微信支付V2的开发文档：https://pay.weixin.qq.com/wiki/doc/api/index.html

微信支付V3的开发文档：https://pay.weixin.qq.com/wiki/doc/apiv3/index.shtml