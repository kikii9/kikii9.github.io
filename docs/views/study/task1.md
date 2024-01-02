---
sidebar: auto
---

# 作业一



## 一、准备

### 1.框架

webpack+原生html+jQuery

### 2.引入

首页引入默认样式及jq

```js
<link rel="stylesheet" href="https://nie.res.netease.com/comm/css/art.com.css" />
<script charset="utf-8" src="https://nie.res.netease.com/comm/js/jquery(mixNIE).1.11.js"></script>
```

### 3.rem适配

```js
        // 设置rem
        function watchWindowSize() {
            // 设置字体大小 1px=0.01rem
            var w = document.documentElement.clientWidth;
            var h = document.documentElement.clientHeight;
            console.log(w, h)
            document.documentElement.style.fontSize = w / 19.2 + 'px';
        }
        // 将事件侦听器函数附加到窗口的resize事件
        window.addEventListener("resize", watchWindowSize);
        // 调用该函数
        watchWindowSize();
```



## 二、jQuery使用

### 1. jq在线文档

http://hemin.cn/jq/

### 2.jq动画

```js
// 向下滑动图标动画
var xiaB = { bottom: '20rem' }
$('.xia_img-box').animate(xiaB, 1000, rowBack);
function rowBack() {
    if (xiaB.bottom == '20rem') {
        xiaB.bottom = '30rem';
    } else if (xiaB.bottom == '30rem') {
        xiaB.bottom = '20rem';
    }
    $('.xia_img-box').animate(xiaB, 1000, rowBack);
}
```



### 3.jq循环绑定事件

```js
$.each(navList, function (i, item) {
    setTimeout(() => {
        $(id).bind("click", { index: i, id: id }, clickHandler);
        $(id).bind("mouseenter", { index: i, id: id }, enterHandler);
        $(id).bind("mouseleave", { index: i, id: id }, leaveHandler);
    }, 50);
})
```



## 三、swiper

### 1.引入

```js
import Swiper from "../lib/swiper-bundle";
```

### 2.使用

```js
var swiper = new Swiper('#swiper-page', {
    mousewheel: true, //鼠标滚动
    direction: 'vertical', //竖直方向
    allowSlidePrev: true, //可向左或上滑动。
    mousewheel: {
        releaseOnEdges: true, //PC端释放滑动    
    },
});
```

### 3.方法

滚动到指定页面

```js
swiper.slideTo(0, 1000, false);
```

### 4.其他参数

```js
slidesPerView: 3, //展示3项
navigation: {  //导航箭头
        nextEl: '.img-right',
        prevEl: '.img-left',
    },
```

### 5.监听函数

```js
    on: {
        slideChangeTransitionEnd(swiper) {
            setActive(swiper.activeIndex)
        },
    }
```



## 四、其他js相关

### 1.隐藏滚动条

```js
document.documentElement.style.overflowY = 'hidden';
document.documentElement.style.overflowX = 'hidden';
```

### 2.跳转页面

跳转页面，新窗口打开

```js
window.open('https://xyqh5.163.com/index.html');
```

当前页面打开

```js
window.location.href = ['./index.html'];
```



### 3.niceScroll使用

```js
import "../lib/nicescroll"

$(".content").niceScroll({
    cursorcolor: "#A5D4D5",
    background: "#ECDDBC", // 轨道的背景颜色
    cursorwidth: "3rem", // 滚动条的宽度，单位：便素
    cursorborder: "none", // CSS方式定义滚动条边框
    autohidemode: 'leave', // 'leave'  false
    zindex: 99,
});
```

### 4.监听元素距离顶部

```js
        handleScroll() {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            var ch = document.documentElement.clientHeight
            var h = $('#foot').offset().top
            // console.log(scrollTop,h,ch,this.fixNav)
            if (scrollTop < h - ch) {
                this.fixNav = true
            } else {
                this.fixNav = false
            }
        },
        window.onscroll = function () {
            _this.handleScroll()
        }
```

