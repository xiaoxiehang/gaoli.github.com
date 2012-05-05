---
layout: post
title: CSS3 Gradients
category: CSS
---

![CSS3 Gradients](/uploads/2011/10/CSS3-Gradients.jpg "CSS3 Gradients")

HTML5 CSS3 必将是以后的前端的发展方向，

特别是在移动端，高端浏览器给攻城师们带来的愉悦无以言表。

偶然在 webkit 官网上看到一篇关于 CSS3 Gradients（渐变）的文章，

感觉非常不错，于是利用空余时间将其中的实例部分翻译了下，

本人 E 文不太好，有些是照按自己理解翻译，希望对大家学习有帮助吧！

附上原文地址：[http://www.webkit.org/blog/1424/css3-gradients/](http://www.webkit.org/blog/1424/css3-gradients/)

**The New Gradient Syntax**

新的语法包含四个渐变函数：

    linear-gradient()
    radial-gradient()
    repeating-linear-gradient()
    repeating-radial-gradient()

这些函数名无需过多的解释，但我之后会谈到更多关于循环渐变。

循环渐变与非循环渐变的语法是相同的，这是件好事儿。

因为规范仍是初稿阶段，所以我们在这些渐变函数前加以-webkit-前缀。

当以后规范不再是初稿阶段，我们将能够不加前缀而使用他们。

**Linear Gradients**

为元素盒模型填充[线性渐变](http://dev.w3.org/csswg/css3-images/#linear-gradients)是最常用的。你只需要考虑渐变从哪个方向开始。

有两种方式去指定他。第一种，你可以指定渐变从哪个方向或角落开始：

<div style="margin-top:10px;width:200px;height:80px;border:1px solid #000;resize:both;overflow:hidden;background-image:-webkit-linear-gradient(left, white, black);background-image:-moz-linear-gradient(left, white, black);"></div>

    -webkit-linear-gradient(left, white, black)

<div style="margin-top:10px;width:200px;height:80px;border:1px solid #000;resize:both;overflow:hidden;background-image:-webkit-linear-gradient(top right, white, black);background-image:-moz-linear-gradient(top right, white, black);"></div>

    -webkit-linear-gradient(top right, white, black)

你甚至可以省略第一个参数，他将默认为top并给出一个垂直渐变。

第二种，你可以指定渐变的角度：

<div style="margin-top:10px;width:200px;height:80px;border:1px solid #000;resize:both;overflow:hidden;background-image:-webkit-linear-gradient(135deg, white, black);background-image:-moz-linear-gradient(135deg, white, black);"></div>

    -webkit-linear-gradient(135deg, white, black)

角度按逆时针方向旋转，0度时为从左向右方向。

注意在所有这些情况下，渐变足够大以填满元素盒模型。

**Radial Gradients**

[径向渐变](http://dev.w3.org/csswg/css3-images/#radial-gradients)更加复杂，在填充时有更多的选项。

最简单的形式是以元素盒模型中心为渐变起始，向外填充至每个角落：

<div style="margin-top:10px;width:200px;height:80px;border:1px solid #000;resize:both;overflow:hidden;background-image:-webkit-radial-gradient(white, black);background-image:-moz-radial-gradient(white, black);"></div>

    -webkit-radial-gradient(white, black)

这相当于 `-webkit-radial-gradient(center, ellipse cover, white, black)`。

第一个参数为可选，默认为 `center` ，也可以是一个点（就像 `background-position` ），

他允许你将原点放置到其它地方：

<div style="margin-top:10px;width:200px;height:80px;border:1px solid #000;resize:both;overflow:hidden;background-image:-webkit-radial-gradient(10% 30%, white, black);background-image:-moz-radial-gradient(10% 30%, white, black);"></div>

    -webkit-radial-gradient(10% 30%, white, black)

原点位置后面的参数用来指定渐变的形状和大小，这是两种方式之一。

这种方式用一些关键词来描述形状（`circle，ellipse`）和

大小（`closest-side，closest-corner，farthest-side，farthest-corner，contain，cover`）例如：

<div style="margin-top:10px;width:200px;height:80px;border:1px solid #000;resize:both;overflow:hidden;background-image:-webkit-radial-gradient(30% 30%, closest-corner, white, black);background-image:-moz-radial-gradient(30% 30%, closest-corner, white, black);"></div>

    -webkit-radial-gradient(30% 30%, closest-corner, white, black)

<div style="margin-top:10px;width:200px;height:80px;border:1px solid #000;resize:both;overflow:hidden;background-image:-webkit-radial-gradient(30% 30%, circle closest-corner, white, black);background-image:-moz-radial-gradient(30% 30%, circle closest-corner, white, black);"></div>

    -webkit-radial-gradient(30% 30%, circle closest-corner, white, black)

如果你愿意，你还可以分别指定径向渐变的水平与垂直结束半径：

<div style="margin-top:10px;width:200px;height:80px;border:1px solid #000;resize:both;overflow:hidden;background-image:-webkit-radial-gradient(center, 5em 40px, white, black);background-image:-moz-radial-gradient(center, 5em 40px, white, black);"></div>

    -webkit-radial-gradient(center, 5em 40px, white, black)

**Color Stops**

为渐变指定颜色停靠点很容易；最简单的情况下，你只需要提供一个颜色列表：

<div style="margin-top:10px;width:200px;height:80px;border:1px solid #000;resize:both;overflow:hidden;background-image:-webkit-linear-gradient(left, red, green, blue);background-image:-moz-linear-gradient(left, red, green, blue);"></div>

    -webkit-linear-gradient(left, red, green, blue)

这样会使所有的颜色平均分布于渐变之上。

如果你愿意，你还可以为个别颜色定位具体的停靠点，然后让浏览器分配其它剩余的：

<div style="margin-top:10px;width:200px;height:80px;border:1px solid #000;resize:both;overflow:hidden;background-image:-webkit-linear-gradient(bottom left, red 10px, yellow, green, blue 90%);background-image:-moz-linear-gradient(bottom left, red 10px, yellow, green, blue 90%);"></div>

    -webkit-linear-gradient(bottom left, red 20px, yellow, green, blue 90%)

那些渐变轴线可能是条对角线；那么百分比则相应对角线的长度。

颜色的停靠点相同会使颜色之间过渡强烈：

<div style="margin-top:10px;width:200px;height:80px;border:1px solid #000;resize:both;overflow:hidden;background-image:-webkit-linear-gradient(top left, red, yellow, green 60%, purple 60%, blue);background-image:-moz-linear-gradient(top left, red, yellow, green 60%, purple 60%, blue);"></div>

    -webkit-linear-gradient(top left, red, yellow, green 60%, purple 60%, blue)

**Repeating Gradients**

循环渐变 `repeating-linear-gradient()` 和 `repeating-radial-gradient()`

拥有完全相同的简写语法，且整个渐变将被循环填充：

<div style="margin-top:10px;width:200px;height:80px;border:1px solid #000;resize:both;overflow:hidden;background-image:-webkit-repeating-linear-gradient(left, red 10%, blue 30%);background-image:-moz-repeating-linear-gradient(left, red 10%, blue 30%);"></div>

    -webkit-repeating-linear-gradient(left, red 10%, blue 30%)

这些停靠点将被循环用于调整他们首尾相连，这常常会导致颜色之间过渡强烈。

你可以避免循环末尾的颜色:

<div style="margin-top:10px;width:200px;height:80px;border:1px solid #000;resize:both;overflow:hidden;background-image:-webkit-repeating-radial-gradient(top left, circle, red, blue 10%, red 20%);background-image:-moz-repeating-radial-gradient(top left, circle, red, blue 10%, red 20%);"></div>

    -webkit-repeating-radial-gradient(top left, circle, red, blue 10%, red 20%)
