---
layout: post
title: IE下页面调试利器 - Firebug Lite
---

方法一：在需要调试的页面中插入以下JS代码

    <script type="text/javascript" src="https://getfirebug.com/firebug-lite.js"></script>

方法二：在需要调试页面的地址栏中输入以下JS代码，回车！

    javascript:(function(F,i,r,e,b,u,g,L,I,T,E){if(F.getElementById(b))return;E=F[i+'NS']&&F.documentElement.namespaceURI;E=E?F[i+'NS'](E,'script'):F[i]('script');E[r]('id',b);E[r]('src',I+g+T);E[r](b,u);(F[e]('head')[0]||F[e]('body')[0]).appendChild(E);E=new%20Image;E[r]('src',I+L);})(document,'createElement','setAttribute','getElementsByTagName','FirebugLite','4','firebug-lite.js','releases/lite/latest/skin/xp/sprite.png','https://getfirebug.com/','#startOpened');

通过以上两种方法你就能在IE、Chrome、Opera、Safari 等浏览器上体验Firebug！

[Firebug Lite 官方主页](http://getfirebug.com/firebuglite)
