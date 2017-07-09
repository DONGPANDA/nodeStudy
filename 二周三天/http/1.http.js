/**
 * Created by 96004 on 2017/7/9.
 */
//http服务:需要 ip地址 port端口号
let http=require('http');
let listener=function (request,response) {//监听函数,客户端的请求,服务器的响应
    response.setHeader('Content-Type','text/plain;charset=utf-8;');
    response.setHeader('a',666)
    response.write('阿牛张大嘴')//写到响应体中
    response.end()
    //favicon.ico 请求是看心情,如果发现不存在,以后就不请求了
}
//建议不要用3000一下端口
let port=3000
http.createServer(listener).listen(port,function () {
    console.log('少佐已经就位'+port);
})
//改动服务端代码,必须重新启动
//nodemon模块可以实现自动重启 在命令行下使用需要全局安装