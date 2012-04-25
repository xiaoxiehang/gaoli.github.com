---
layout: post
title: IE下块元素实现 display:inline-block
---

display:inline-block

将对象呈递为内联对象，但是对象的内容作为块对象呈递。旁边的内联对象会被呈递在同一行内，允许空格。

目前支持的浏览器有：IE8、Firefox3、Opera、Safari

方案一：

先定义 display:inline-block 触发 layout ，再将 display 设回 block 或 inline，layout 不会消失，

两个 display 要先后放在两个 CSS 中声明才会有效果，这是 IE 的一个经典 BUG 。

    .inline-block {
        display:inline-block; /* 触发块元素的 layout */
    }
     
    .inline-block {
        display:inline; /* 让块元素呈递为内联对象 */
    }

方案二：（推荐方案）

    .inline-block {   
        display:inline; /* 让块元素呈递为内联对象 */  
        zoom:1; /* 触发块元素的 layout */  
    }  
