---
layout: post
title: jQuery mouseenter mouseleave 原理
category: JavaScript
---

使用 jQuery 作为自己基础类库的朋友肯定对 $.fn.hover 不陌生，

印象中可能认为其只是对 mouseover / mouseout 的简单封装。

    hover: function( fnOver, fnOut ) {
        return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
    }

然而当我们翻开源码会发现，函数中并没有 mouseover / mouseout 的身影，

那 mouseenter / mouseleave 是什么？让我们先通过一个 [DEMO](/demo/jquery-mouseenter-mouseleave.html) 来感受下！

从 DEMO 中我们可以发现 mouseenter / mouseleave 绑定的事件处理程序，

**只有当鼠标指针进入（离开）元素时才会执行，元素内鼠标移动操作则被忽略！**

    // Add relatedTarget, if necessary
    if ( !event.relatedTarget && fromElement ) {
        event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
    }

为了实现这一判断需要在鼠标移动时实时捕获移入 / 移出鼠标的元素进行比较，

高版本浏览器（Chrome / Firefox / IE9+）可通过 [event.relatedTarget](http://www.w3school.com.cn/htmldom/event_relatedtarget.asp) 获取，

低版本浏览器（IE6/7/8）则可通过 [event](http://www.w3school.com.cn/htmldom/dom_obj_event.asp).fromElement 与事件目标对比实现。

    // For mousenter/leave call the handler if related is outside the target.
    // NB: No relatedTarget if the mouse left/entered the browser window
    if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
        event.type = handleObj.origType;
        ret = handleObj.handler.apply( this, arguments );
        event.type = fix;
    }

最后附上 mouseenter / mouseleave 被触发时 handle 核心源码供大家参考，

判断条件 related 与 target 对应已封装好的 event.relatedTarget 与事件目标。

