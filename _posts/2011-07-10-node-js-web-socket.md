---
layout: post
title: 基于Node.js 的 Web Socket
category: HTML 
---

首先要感谢 Jacek Becela 的 node.ws.js 插件，

需要的同学可以[点击这里](https://github.com/ncr/node.ws.js)从GitHub下载此插件，

README中已经包含了此插件的基本用法，按照下面的方法应该可以做出一个简单的聊天室！

服务器端 Node.js 代码：

    var ws = require('../node/lib/ws.js'),
        msg = new Array;

    ws.createServer(function(socket) {
        socket.addListener("connect", function(resource) {
            msg.push(this);
        }).addListener("data", function(data) {
            for (var i = 0; i < msg.length; i++) {
                msg[i].write(data);
            }
        })
    }).listen(1337);

    console.log("WebSocket running!");

浏览器端 JavaScript 代码：

    <!DOCTYPE HTML>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>chat</title>
    </head>
    <body>
        <div id="show"></div>
        <input id="msg" name="" type="text" />
        <input id="send" type="submit" value="Send" />
        <script type="text/javascript">
            var ws = new WebSocket("ws://localhost:1337/"),
                msg = document.getElementById("msg"),
                show = document.getElementById("show"),
                send = document.getElementById("send");
             
            send.onclick = function() {
                var val = msg.value;
                    ws.send(val);
            };
             
            ws.onmessage = function(evt) {
                show.innerHTML += evt.data + "<br />";
            };
        </script>
    </body>
    </html>
