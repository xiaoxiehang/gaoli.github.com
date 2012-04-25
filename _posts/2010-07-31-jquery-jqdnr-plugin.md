---
layout: post
title: jQuery插件 - jqDnR
---

jqDnR是一个轻量级的jQuery插件，它能够让你轻松实现对页面元素的拽拖与缩放功能。

关于jQuery升级到1.4版本后jqDnR无法使用的BUG可以参考以下解决方案:

在1.4之前的jQuery版本中$()等价于$(document)，jQuery升级到1.4版本后$()则返回空集合，

所以把jqDnR中的$()替换为$(document)就能解决此BUG。

[jqDnR 官方主页](http://dev.iceburg.net/jquery/jqDnR/)
