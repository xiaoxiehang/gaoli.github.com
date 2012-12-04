---
layout: post
title: jQuery event 对象浅析
category: JavaScript
---

最终传入事件处理程序的 event 其实已经被 jQuery 做过标准化处理，

其原有的事件对象则被保存于 event 对象的 originalEvent 属性之中，

每个 event 都是 jQuery.Event 的实例，其原型链中保存有六个方法，

    jQuery.Event.prototype = {
        preventDefault: function() {
            // 取消事件默认行为
        },
        stopPropagation: function() {
            // 取消事件向上冒泡
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = returnTrue;
            this.stopPropagation();
        },
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse
    };

对于取消事件默认行为与向上冒泡大家肯定不陌生，让我们把重点放在第三个方法上，

从源码上我们知道其调用了stopPropagation方法，所以他第一个作用就是取消冒泡。

    for ( i = 0; i < handlerQueue.length && !event.isPropagationStopped(); i++ ) {
        matched = handlerQueue[ i ];
        ...
        for ( j = 0; j < matched.matches.length && !event.isImmediatePropagationStopped(); j++ ) {
            ...
        }
    }

让我先来简单阐述下 jQuery 的事件绑定机制，这样能让大家更好理解他的第二个作用。

使用 jQuery 绑定的事件处理程序会按其类型与绑定顺序存于节点相应的events对象中，

当事件触发时则使用 $._data 取出events中对应事件的处理程序列队以便后续遍历执行。

内层循环的 matched.matches 中保存事件触发时当前节点需执行的事件处理程序列队，

**所以当 isImmediatePropagationStopped 为 true 时则会阻止当前事件下该节点的后续事件处理程序执行。**

最后来个简单的 [DEMO](/demo/jquery-event.html)，希望能帮助大家更好的理解！