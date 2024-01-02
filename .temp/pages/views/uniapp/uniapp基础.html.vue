<template><div><h1 id="uniapp基础" tabindex="-1"><a class="header-anchor" href="#uniapp基础" aria-hidden="true">#</a> uniapp基础</h1>
<h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期" aria-hidden="true">#</a> 生命周期</h3>
<p><code v-pre>uni-app</code> 页面除支持 Vue 组件生命周期外还支持下方页面生命周期函数</p>
<table>
<thead>
<tr>
<th style="text-align:left">函数名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">平台差异说明</th>
<th style="text-align:left">最低版本</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">onInit</td>
<td style="text-align:left">监听页面初始化，其参数同 onLoad 参数，为上个页面传递的数据，参数类型为 Object（用于页面传参），触发时机早于 onLoad</td>
<td style="text-align:left">百度小程序</td>
<td style="text-align:left">3.1.0+</td>
</tr>
<tr>
<td style="text-align:left">onLoad</td>
<td style="text-align:left">监听页面加载，其参数为上个页面传递的数据，参数类型为 Object（用于页面传参），参考<a href="https://uniapp.dcloud.net.cn/api/router#navigateto" target="_blank" rel="noopener noreferrer">示例<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onShow</td>
<td style="text-align:left">监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onReady</td>
<td style="text-align:left">监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onHide</td>
<td style="text-align:left">监听页面隐藏</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onUnload</td>
<td style="text-align:left">监听页面卸载</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onResize</td>
<td style="text-align:left">监听窗口尺寸变化</td>
<td style="text-align:left">App、微信小程序、快手小程序</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onPullDownRefresh</td>
<td style="text-align:left">监听用户下拉动作，一般用于下拉刷新，参考<a href="https://uniapp.dcloud.net.cn/api/ui/pulldown" target="_blank" rel="noopener noreferrer">示例<ExternalLinkIcon/></a></td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onReachBottom</td>
<td style="text-align:left">页面滚动到底部的事件（不是scroll-view滚到底），常用于下拉下一页数据。具体见下方注意事项</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onTabItemTap</td>
<td style="text-align:left">点击 tab 时触发，参数为Object，具体见下方注意事项</td>
<td style="text-align:left">微信小程序、QQ小程序、支付宝小程序、百度小程序、H5、App、快手小程序、京东小程序</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onShareAppMessage</td>
<td style="text-align:left">用户点击右上角分享</td>
<td style="text-align:left">微信小程序、QQ小程序、支付宝小程序、字节小程序、飞书小程序、快手小程序、京东小程序</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onPageScroll</td>
<td style="text-align:left">监听页面滚动，参数为Object</td>
<td style="text-align:left">nvue暂不支持</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onNavigationBarButtonTap</td>
<td style="text-align:left">监听原生标题栏按钮点击事件，参数为Object</td>
<td style="text-align:left">App、H5</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onBackPress</td>
<td style="text-align:left">监听页面返回，返回 event = {from:backbutton、 navigateBack} ，backbutton 表示来源是左上角返回按钮或 android 返回键；navigateBack表示来源是 uni.navigateBack ；详细说明及使用：<a href="http://ask.dcloud.net.cn/article/35120" target="_blank" rel="noopener noreferrer">onBackPress 详解<ExternalLinkIcon/></a>。支付宝小程序只有真机能触发，只能监听非navigateBack引起的返回，不可阻止默认行为。</td>
<td style="text-align:left">app、H5、支付宝小程序</td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left">onNavigationBarSearchInputChanged</td>
<td style="text-align:left">监听原生标题栏搜索输入框输入内容变化事件</td>
<td style="text-align:left">App、H5</td>
<td style="text-align:left">1.6.0</td>
</tr>
<tr>
<td style="text-align:left">onNavigationBarSearchInputConfirmed</td>
<td style="text-align:left">监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。</td>
<td style="text-align:left">App、H5</td>
<td style="text-align:left">1.6.0</td>
</tr>
<tr>
<td style="text-align:left">onNavigationBarSearchInputClicked</td>
<td style="text-align:left">监听原生标题栏搜索输入框点击事件（pages.json 中的 searchInput 配置 disabled 为 true 时才会触发）</td>
<td style="text-align:left">App、H5</td>
<td style="text-align:left">1.6.0</td>
</tr>
<tr>
<td style="text-align:left">onShareTimeline</td>
<td style="text-align:left">监听用户点击右上角转发到朋友圈</td>
<td style="text-align:left">微信小程序</td>
<td style="text-align:left">2.8.1+</td>
</tr>
<tr>
<td style="text-align:left">onAddToFavorites</td>
<td style="text-align:left">监听用户点击右上角收藏</td>
<td style="text-align:left">微信小程序、QQ小程序</td>
<td style="text-align:left">2.8.1+</td>
</tr>
</tbody>
</table>
</div></template>


