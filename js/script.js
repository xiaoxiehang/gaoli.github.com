/**
 * @Description: script.js
 * @Version:     v1.0
 * @Author:      GaoLi
 */

/**
 * 百度统计
 */
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Faadb874c4f4df417cacd2a85753c677b' type='text/javascript'%3E%3C/script%3E"));

/**
 * 百度分享
 */
if (document.getElementById("bdlike_shell")) {
   
    var bdShare_config = {
        "type":"small",
        "color":"red",
        "uid":"662881",
        "share":"yes"
    };

    document.getElementById("bdlike_shell").src="http://bdimg.share.baidu.com/static/js/like_shell.js?t=" + new Date().getHours();

}

/**
 * DISQUS
 */
if (document.getElementById("disqus_thread")) {

    var disqus_shortname = 'f2e';

    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })(); 

}
