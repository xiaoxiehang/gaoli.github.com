---
layout: post
title: javaScript数组去重函数
category: JavaScript
---

数组去重顾名思义就是把数组中重复的元素去掉！

unique 函数算法：

将 [数组元素类型+数组元素值] 作为 temp 对象的下标，对象中拥有相同下标的元素将被覆盖，

最终将 temp 对象中拥有不同下标的元素 push 到数组 newArray 并返回！

[DEMO](/demo/javascript-array-unique.html)
