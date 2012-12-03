---
layout: post
title: jQuery event 对象浅析
category: JavaScript
---

最终传入事件处理程序的 event 其实已经被 jQuery 做过标准化处理，

其原有的事件对象则被保存于 event 对象的 originalEvent 属性之中。

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

对于取消事件默认行为与向上冒泡大家肯定不陌生，让我们把重点放在第三个方法上。

从源码上我们知道其调用了stopPropagation方法，所以他第一个作用就是取消冒泡。

    for ( j = 0; j < matched.matches.length && !event.isImmediatePropagationStopped(); j++ ) {
        ...
    }

jQuery 会根据事件类型与绑定先后顺序来存储事件处理程序，事件触发后再依次执行。

内层循环的 matched.matches 中保存着当前事件触发后需要执行的事件处理程序列队，

当执行 isImmediatePropagationStopped 方法后将会阻止当前节点的后续事件监听。

最后来个简单的 [DEMO](/demo/jquery-event.html)，希望能帮助大家更好的理解！