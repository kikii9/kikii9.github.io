<template><div><h1 id="uniapp支付功能" tabindex="-1"><a class="header-anchor" href="#uniapp支付功能" aria-hidden="true">#</a> uniapp支付功能</h1>
<p>uni.requestPayment()</p>
<p>https://uniapp.dcloud.net.cn/api/plugins/payment.html#h5-payment</p>
<h2 id="一-微信小程序中支付" tabindex="-1"><a class="header-anchor" href="#一-微信小程序中支付" aria-hidden="true">#</a> 一.微信小程序中支付</h2>
<p>1.登录</p>
<p>2.获取openid</p>
<p>3.创建订单，获取支付信息</p>
<p>4.发起支付</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 仅作为示例，非真实参数信息。</span>
uni<span class="token punctuation">.</span><span class="token function">requestPayment</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">provider</span><span class="token operator">:</span> <span class="token string">'wxpay'</span><span class="token punctuation">,</span> <span class="token comment">// 服务商</span>
	<span class="token literal-property property">timeStamp</span><span class="token operator">:</span> <span class="token function">String</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// 时间戳</span>
	<span class="token literal-property property">nonceStr</span><span class="token operator">:</span> <span class="token string">'A1B2C3D4E5'</span><span class="token punctuation">,</span> <span class="token comment">// 随机字符串</span>
	<span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">'prepay_id=wx20180101abcdefg'</span><span class="token punctuation">,</span> <span class="token comment">// 统一订单号</span>
	<span class="token literal-property property">signType</span><span class="token operator">:</span> <span class="token string">'MD5'</span><span class="token punctuation">,</span> <span class="token comment">// 签名算法</span>
	<span class="token literal-property property">paySign</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 签名</span>
	<span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'success:'</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fail:'</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-app中微信支付" tabindex="-1"><a class="header-anchor" href="#二-app中微信支付" aria-hidden="true">#</a> 二.app中微信支付</h2>
<p>1.登录</p>
<p>2.获取openid</p>
<p>3.创建订单，获取支付信息</p>
<p>4.发起支付</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">requestPayment</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token string-property property">"provider"</span><span class="token operator">:</span> <span class="token string">"wxpay"</span><span class="token punctuation">,</span>  <span class="token comment">// 服务商</span>
    <span class="token string-property property">"orderInfo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">"appid"</span><span class="token operator">:</span> <span class="token string">"wx499********7c70e"</span><span class="token punctuation">,</span>  <span class="token comment">// 微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致</span>
        <span class="token string-property property">"noncestr"</span><span class="token operator">:</span> <span class="token string">"c5sEwbaNPiXAF3iv"</span><span class="token punctuation">,</span> <span class="token comment">// 随机字符串</span>
        <span class="token string-property property">"package"</span><span class="token operator">:</span> <span class="token string">"Sign=WXPay"</span><span class="token punctuation">,</span>        <span class="token comment">// 固定值</span>
        <span class="token string-property property">"partnerid"</span><span class="token operator">:</span> <span class="token string">"148*****52"</span><span class="token punctuation">,</span>      <span class="token comment">// 微信支付商户号</span>
        <span class="token string-property property">"prepayid"</span><span class="token operator">:</span> <span class="token string">"wx202254********************fbe90000"</span><span class="token punctuation">,</span> <span class="token comment">// 统一下单订单号 </span>
        <span class="token string-property property">"timestamp"</span><span class="token operator">:</span> <span class="token number">1597935292</span><span class="token punctuation">,</span>        <span class="token comment">// 时间戳（单位：秒）</span>
        <span class="token string-property property">"sign"</span><span class="token operator">:</span> <span class="token string">"A842B45937F6EFF60DEC7A2EAA52D5A0"</span> <span class="token comment">// 签名，这里用的 MD5/RSA 签名</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">fail</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-app中支付宝支付" tabindex="-1"><a class="header-anchor" href="#三-app中支付宝支付" aria-hidden="true">#</a> 三.app中支付宝支付</h2>
<p>1.创建订单，获取支付信息</p>
<p>2.发起支付</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>uni<span class="token punctuation">.</span><span class="token function">requestPayment</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">provider</span><span class="token operator">:</span> <span class="token string">'alipay'</span><span class="token punctuation">,</span>  <span class="token comment">// 服务商</span>
    <span class="token literal-property property">orderInfo</span><span class="token operator">:</span> <span class="token string">'orderInfo'</span><span class="token punctuation">,</span> <span class="token comment">// 订单数据</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'success:'</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">fail</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fail:'</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-h5中微信支付" tabindex="-1"><a class="header-anchor" href="#四-h5中微信支付" aria-hidden="true">#</a> 四.h5中微信支付</h2>
<p>微信内嵌浏览器运行H5版时，可通过js sdk实现微信支付</p>
<p>JSSDK 的使用方式</p>
<p>https://ask.dcloud.net.cn/article/35380</p>
<p>JS-SDK说明文档</p>
<p>https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html</p>
<h3 id="微信支付" tabindex="-1"><a class="header-anchor" href="#微信支付" aria-hidden="true">#</a> 微信支付</h3>
<p>发起一个微信支付请求</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">chooseWXPay</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符</span>
  <span class="token literal-property property">nonceStr</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 支付签名随机串，不长于 32 位</span>
  <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）</span>
  <span class="token literal-property property">signType</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 微信支付V3的传入RSA,微信支付V2的传入格式与V2统一下单的签名格式保持一致</span>
  <span class="token literal-property property">paySign</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 支付签名</span>
  <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 支付成功后的回调函数</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备注：prepay_id 通过微信支付统一下单接口拿到，paySign 采用统一的微信支付 Sign 签名生成方法，注意这里 appId 也要参与签名，appId 与 config 中传入的 appId 一致，签名格式要求以微信支付文档为准。</p>
<p>微信支付V2的开发文档：https://pay.weixin.qq.com/wiki/doc/api/index.html</p>
<p>微信支付V3的开发文档：https://pay.weixin.qq.com/wiki/doc/apiv3/index.shtml</p>
</div></template>


