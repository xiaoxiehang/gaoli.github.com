---
layout: post
title: IE6行高(line-height)失效
category: CSS
---

当一个容器里的文字与img、input、textarea、select、object等元素相连时，

对这个容器设置的line-height数值就会失效，同时以上元素的行高可能×2，

受影响的浏览器：IE 5.01 / IE 5.5 / IE 6.0

解决方法是对与文字相连接的img、input、textarea、select、object等元素加以属性，代码如下：

    .line-height {   
        margin:/* (所属line-height-自身img,input,select,object高度)/2px 0 */;   
        vertical-align:middle;   
    }
