/**
 * Created by 96004 on 2017/7/15.
 */
let express = require('express');
//express 是一个方法或者说是一个函数
let app = express();//引用其返回值
//监听端口,启动一个app服务器
//定义路由
//app的方法名和http的请求方法名是一一对应的
//第二个参数是请求的监听函数
//所有的路径永远以/开头
app.get('/signup',function (req,res) {
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end('注册')
})
app.get('/signin',function (req,res) {
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end('登陆')
})
//all代表所有方法,*匹配所有路径
//路由只要能匹配一个,就不能向下匹配了
app.all('*',function (req,res) {
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end('你访问的不存在')
});

app.listen(8080);
//app是一个监听函数
//如果没有匹配到任何一个路由,就会返回404,并且返回响应体Cannot GET/xxx
/*app.listen = function listen() {
    var server = http.createServer(this);
    return server.listen.apply(server, arguments);
};*/
