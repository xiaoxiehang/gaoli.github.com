---
layout: post
title: CSS 实现背景半透明
category: CSS
---

记得去年论坛改版，设计师为了美观，要求通用弹窗添加一圈半透明边框。

那时为了实现背景半透明且里面的文字不透明，会将背景独立出来做个层。

感谢 [@林小志](http://blog.linxz.de) 的博客，让我知晓 IE过渡滤镜 + CSS3 rgba 即可完美实现。

具体实现代码如下：
    
    .transparent {
        background:rgba(0, 0, 0, 0.3);
        filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#4c000000', EndColorStr='#4c000000');
    }
        
    :root .transparent {
        filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#00000000', EndColorStr='#00000000');
    }
    
**提示：IE9 支持 filter 与 rgba 属性，这会导致其背景透明度双倍叠加！**

**解决：使用 :root 伪类为 IE9 单独写 HACK 并将其透明度降为 0 即可。**

参考文献：

[背景半透明最佳实践](http://sofish.de/1916)

[使用IE过渡滤镜和CSS3中的RGBA属性完成背景色透明效果](http://blog.linxz.de/ie_filter_css3_rgba/)

转换工具：

[CSS背景颜色属性值转换](http://www.linxz.de/demo/hex_color.html)