---
layout: post
title: jQuery 1.7 统一事件绑定API
---

jQuery 1.7 已经正式发布！

你可以从 jQuery CDN 获取代码：[Production](http://code.jquery.com/jquery-1.7.min.js) [Development](http://code.jquery.com/jquery-1.7.js)

新版本新增 .on() 和 .off() 事件绑定API，

从此统一了以往版本中的三种事件绑定方法，

两个方法名也更加的精简，方便记忆与书写。

下面是两个新增方法的调用格式：

    $(elements).on( events [, selector] [, data] , handler );
    $(elements).off( [ events ] [, selector] [, handler] );

当提供 selector 参数时 .on() 与 .delegate() 方法类似，

通过选择器（selector）过滤页面元素，提供事件委派处理。

省略或置空 selector 时 .on() 与 .bind() 方法类似。

使用 .on() 方法时需注意，如果 data 参数为字符串类型，

不得省略 selector 参数，否则 data 将被误认为 selector。

通过对象为 data 提供参数，你永远不需要担心这种特殊情况。

所有现有的事件绑定方法（以及他们相应的解除绑定方法），

都会在 1.7 版本中得以保留，但官方更推荐我们使用新的API。

以下是新旧事件绑定API的几个对比例子：

    $('a').bind('click', myHandler);
    $('a').on('click', myHandler);
     
    $('form').bind('submit', { val: 42 }, fn);
    $('form').on('submit', { val: 42 }, fn);
     
    $(window).unbind('scroll.myPlugin');
    $(window).off('scroll.myPlugin');
     
    $('.comment').delegate('a.add', 'click', addNew);
    $('.comment').on('click', 'a.add', addNew);
     
    $('.dialog').undelegate('a', 'click.myDlg');
    $('.dialog').off('click.myDlg', 'a');
     
    $('a').live('click', fn);
    $(document).on('click', 'a', fn);
     
    $('a').die('click');
    $(document).off('click', 'a');

更多新版发布详情可以点击查看 jQuery 官方博客 [jQuery 1.7 Released](http://blog.jquery.com/2011/11/03/jquery-1-7-released/)
