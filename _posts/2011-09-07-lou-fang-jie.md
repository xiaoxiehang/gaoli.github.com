---
layout: post
title: 楼坊街 - 地图拖拽与延迟加载
---

**地图拖拽**

楼坊街的核心结构包括显示层view与拖拽层drag，拖拽层以决对定位方式相对于显示层进行定位，

拖拽的原理也相对比较简单，主要分为以下的步骤：

1. 当触发 mousedown 事件时，记录此时鼠标在页面上的坐标位置，

2. 当触发 mousemove 事件时，将偏移后的坐标与原先的坐标相减，

3. 将(X, Y)的坐标值分别赋值给拖拽层的(left, top)属性，

4. 当触发 mouseup 事件时，将 mousemove 相对应的函数解除绑定。

我们可以将第2、3步想像成Flash中的一个关键帧，连续的关键帧则造就了拖拽层在显示层中的平滑移动！

**延迟加载**

图片延迟加载早已经不是什么新鲜事儿，原理也很简单：

每当触发 mousemove 事件时，遍历保存好的图片DOM，

判断图片的位置是否即将进入显示层范围，如果是则用真实的图片地址将load图片替换。

**提供两个DEMO，应该还有很多优化的地方**

简化版本：[http://gaoli.github.com/map-drag](http://gaoli.github.com/map-drag)

专题版本：[http://topic.19lou.com/home/2011/lfj.html](http://topic.19lou.com/home/2011/lfj.html)
