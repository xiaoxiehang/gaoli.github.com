---
layout: post
title: 纯CSS实现未知尺寸图片垂直居中
---

淘宝UED前端招聘中有这样一道题目：

使用纯CSS实现未知尺寸的图片(但高宽都小于200px)在200px的正方形容器中水平和垂直居中。

下面是一个权衡的相对结构干净，CSS简单的解决方法：

    .cssbox {
        /* 非IE内核浏览器识别垂直居中 */
        display:table-cell;
        vertical-align:middle;
         
        /* IE内核浏览器识别垂直居中 */
        *display:block;
        *font-size:175px; /* 约为高度的0.873，200*0.873 约为175 */
         
        text-align:center;
        width:200px;
        height:200px;
    }
      
    .cssbox img {
        vertical-align:middle;
    }
