---
layout: post
title: 兼容 IE Firefox 的键盘控制事件
category: JavaScript
---

    document.onkeydown = keyDown

浏览器执行该语句时，无论按下键盘上的哪个键，都将执行KeyDown函数；

    function keyDown(e)

变量e表示发生击键事件；

    IE：event.keyCode
    FF：e.which

获取该键的索引值；

    String.fromCharCode()

将索引值转化成该键的字母或数字值；

[DEMO](/demo/ie-firefox-onkeydown.html)
