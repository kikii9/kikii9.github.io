---
sidebar: auto
---

# 作业二

## 一、准备

### 1.jq使用

等页面加载完毕之后，才开始执行函数

```js
$(function () {}
```

### 2.适配

```js
    var initScreen = function (callback) {//初始化html  font-size
        var _fontsize = 625
        if (document.documentElement.clientWidth < 1400) {
            _fontsize = 1400 / 1920 * 625
        }
        else if (document.documentElement.clientWidth / document.documentElement.clientHeight > 3) {
            _fontsize = document.documentElement.clientHeight * 3 / 1920 * 625
        }
        else {
            _fontsize = document.documentElement.clientWidth / 1920 * 625
        }
        $("html").css("font-size", _fontsize + "%");
        if (callback) callback();
    }
    initScreen();
    $(window).resize(function () {
        initScreen();
    })
    setTimeout(() => {
        initScreen();
    }, 10);
```

## 二、其他

### 1.模板字符串

```js
var url = require(`../../img/${szUrl1}/stand${e}0${num}.png`);
```

### 2.图片预加载

```js
    function preloadimages(arr) {
        var newimages = [], loadedimages = 0
        var postaction = function () { }  //此处增加了一个postaction函数
        var arr = (typeof arr != "object") ? [arr] : arr
        function imageloadpost() {
            loadedimages++
            if (loadedimages == arr.length) {
                postaction(newimages) //加载完成用我们调用postaction函数并将newimages数组做为参数传递进去
            }
        }
        for (var i = 0; i < arr.length; i++) {
            newimages[i] = new Image()
            newimages[i].src = arr[i]
            newimages[i].onload = function () {
                imageloadpost()
            }
            newimages[i].onerror = function () {
                imageloadpost()
            }
        }
        return { //此处返回一个空白对象的done方法
            done: function (f) {
                postaction = f || postaction
            }
        }
    }
```

### 3.读取文件夹中内容

```js
    let img_list = __resload('img/boy');
    console.log(img_list)
```

### 4.less中的css动画函数

```less
.keyframesFunction1  (@name,@url){
    @keyframes @name {
      0%{background-image:~"url(@{url}00.png)"}
      12.5%{background-image: ~"url(@{url}01.png)"}
      25%{background-image:~"url(@{url}02.png)"}
      37.5%{background-image: ~"url(@{url}03.png)"}
      50%{background-image:~"url(@{url}04.png)"}
      62.5%{background-image: ~"url(@{url}05.png)"}
      75%{background-image:~"url(@{url}06.png)"}
      87.5%{background-image: ~"url(@{url}07.png)"}
      100%{background-image:~"url(@{url}00.png)"}
    }
  }

.animak1{
    @url:'../img/kl2/stand00';
    .keyframesFunction1(stepk1,@url);
    animation: stepk1 1s infinite;
}
```

### 5.控制video

jq操作video

```js
    $('#video2')[0].play();
    $('#video2')[0].addEventListener('ended', function () { //播放结束监听
            $('#videoB1').show()
            $('#videoB2').hide()
    }, false);
```

