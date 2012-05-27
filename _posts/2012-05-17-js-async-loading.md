---
layout: post
title: JS 监听元素异步加载状态
category: JavaScript
---

在 IE 系列浏览器中，我们可以通过 `onreadystatechange` 监听元素加载状态，

然后通过 `readyState` 属性判断元素是否加载完成。

Chrome、FireFox 等标准浏览器中，我们则可以通过 `onload` 监听元素是否加载完成。

    /**
     * 判断元素是否加载成功
     */
    node.onload = node.onreadystatechange = function() {
        if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
            alert("加载成功！");
        }
    };

最后附上 [DEMO](/demo/js-async-loading.html) 一枚，供为参考。
