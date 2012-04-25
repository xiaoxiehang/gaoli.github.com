---
layout: post
title: JS 图片预加载技术
---

{{ page.title }}
================
项目开发中时常需要用 JS 判断一张图片是否加载成功，

如果图片加载成功，则执行其相应的 onload 绑定事件，

这个就是我们所说的图片预加载技术，先上最终版代码：

    function loadImage(url, callback) {   
        var img = new Image();   
        img.onload = function () {   
            img.onload = null;   
            callback(img);   
        }   
        img.src = url;   
    }

经测试发现 IE6、IE7、IE8：

如果图片已经存于浏览器缓存中，那么再次对该图片发起请求时，

浏览器就会直接从缓存中加载，这样就无法触发其 onload 事件。

而在 IE9、Chrome、FireFox：

无论图片是否存于浏览器缓存中，都会触发其 onload 事件。

**所以上述代码中我们先要为 img 绑定 onload 事件，再为其赋值 src 地址！**

更多参考文献：

[再谈javascript图片预加载技术](http://www.planeart.cn/?p=1121)

[关于图片的预加载,你所不知道的](http://www.cnblogs.com/rt0d/archive/2011/04/17/2018646.html)
