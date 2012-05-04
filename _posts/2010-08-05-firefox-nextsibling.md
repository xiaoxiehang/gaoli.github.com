---
layout: post
title: Firefox 中使用 nextSibling 的兼容问题
category: JavaScript
---

IE中使用nextSibling确实能够获得你想要的下一节点，

但在Firefox中你只能获得一个空格，所以我们需要一个简单的判断：

当下一节点是文本节点(即nodeType=3)，则继续往下遍历，

当下一节点是元素节点(即nodeType=1)，则返回这一节点。

[DEMO](/demo/firefox-nextsibling.html)
