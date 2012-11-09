---
layout: post
title: CSS 负边距自适应布局
category: CSS
---

掐指算来加入攻城师的队伍也有些年头，一路走来感觉 JS 的技术可谓日新月异，

每每参加交流会时都能感受其霸主地位，而真正坚持研究CSS那些事儿的人很少。

但在现实项目中除非你写单纯的JS类库，否则你将会感受到CSS的质量同样重要。

良好的 HTML 结构配合高质量的 CSS 样式将会使你的公用组件更受大家的欢迎！

**单列定宽单列自适应布局：**

    <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>单列定宽单列自适应布局</title>
        <style type="text/css">
            * {margin:0;padding:0;}
            .cont, .side {float:left;}
            .cont {width:100%;}
            .main {margin-right:200px;background:#DDDDDD;}
            .side {margin-left:-200px;width:200px;background:#F7F7F7;}
        </style>
    </head>
    <body>
        <div class="cont">
            <div class="main">main</div>
        </div>
        <div class="side">side</div>
    </body>
    </html>
    
**左右定宽中间自适应布局：**

    <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>左右定宽中间自适应布局</title>
        <style type="text/css">
            * {margin:0;padding:0;}
            .cont, .side, .sub-main {float:left;}
            .cont {width:100%;}
            .main {margin-right:200px;margin-left:300px;background:#DDDDDD;}
            .side {margin-left:-200px;width:200px;background:#F7F7F7;}
            .sub-main {margin-left:-100%;width:300px;background:#F7F7F7;}
        </style>
    </head>
    <body>
        <div class="cont">
            <div class="main">main</div>
        </div>
        <div class="side">side</div>
        <div class="sub-main">sub-main</div>
    </body>
    </html>
    
**两列等高自适应布局：**

    <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>两列等高自适应布局</title>
        <style type="text/css">
            * {margin:0;padding:0;}
            .layout {overflow:hidden;}
            .cont, .side {float:left;padding-bottom:9999px;margin-bottom:-9999px;}
            .cont {width:100%;}
            .main {margin-right:200px;background:#DDDDDD;}
            .side {margin-left:-200px;width:200px;background:#F7F7F7;}
        </style>
    </head>
    <body>
        <div class="layout">
            <div class="cont">
                <div class="main">
                    main
                    <br/><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
            <div class="side">side</div>
        </div>
    </body>
    </html>

最后惯例推荐些东东：

 [林小志](http://blog.linxz.de) 的 [CSS那些事儿](http://book.douban.com/subject/4117497/)，支付宝 的 [Alice](http://aliceui.com/)，Twitter 的 [Bootstrap](http://twitter.github.com/bootstrap/)