---
layout: post
title: Node.js 处理 GET/POST 请求
category: JavaScript
---

我们需要通过查看 HTTP 请求，

从中提取出请求的 URL 以及 GET/POST 参数，

随后“路由”根据这些数据来执行相应的代码。

为了解析这些数据，我们需要额外的 Node.js 模块，

它们分别是 [url](http://nodejs.org/api/http.html#http_request_url) 和 [querystring](http://nodejs.org/api/querystring.html)，具体的使用方法可以点击链接查看相应手册或参考下表：

                                   url.parse(string).query
                                               |
               url.parse(string).pathname      |
                           |                   |
                           |                   |
                         ------ -------------------
    http://localhost:8888/start?foo=bar&hello=world
                                    ---       -----
                                     |          |
                                     |          |
            querystring.parse(string)["foo"]    |
                                                |
                             querystring(string).parse["hello"]

既然知晓了 Node.js 处理 GET/POST 请求的原理，我们先来写个简单的 GET 请求处理：

    var http = require('http');
    var url = require('url');
    
    http.createServer(function (req, res) {
        // 获取 URL 路径并在控制台上打印
        var pathname = url.parse(req.url).pathname;
        console.log('Request for ' + pathname + ' received.');
        
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
    }).listen(1337, '127.0.0.1');
    
    console.log('Server running at http://127.0.0.1:1337/');
    
到此我们已经可以通过 URL 路径来区别不同的 GET/POST 请求，

相比较 GET 请求，POST 请求一般比较“重“，为了使整个过程非阻塞，

Node.js 会将 POST 数据拆分成很多小的数据块，然后通过触发特定的事件，将这些小数据块传递给回调函数。

这里特定的事件包括：[data](http://nodejs.org/api/http.html#http_event_data)（新的小数据块到达）和 [end](http://nodejs.org/api/http.html#http_event_end)（所有的数据都已经接收完毕），

具体的使用方法可以点击链接查看相应手册或参考以下代码：

    var http = require('http');
    
    http.createServer(function (req, res) {
        var postData = '';
        
        // 设置接收数据编码格式为 UTF-8
        req.setEncoding('utf8');
        
        // 接收数据块并将其赋值给 postData
        req.addListener('data', function(postDataChunk) {
            postData += postDataChunk;
        });
        
        req.addListener('end', function() {
            // 数据接收完毕，执行回调函数
        });
        
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
    }).listen(1337, '127.0.0.1');
    
    console.log('Server running at http://127.0.0.1:1337/');
    
最后附上一篇 [Node入门](http://www.nodebeginner.org/index-zh-cn.html)，希望对大家深入理解有所帮助！