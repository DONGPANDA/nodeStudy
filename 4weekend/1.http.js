/**
 * Created by 96004 on 2017/7/15.
 */
//路由根据客户端请求的方法和路径不同,返回不同的内容
let http =require('http');
//当服务器收到客户端的请求会执行监听函数
http.createServer(function (req,res) {
    let method=req.method;
    let url=req.url;
    if(method==='GET'&&url==='/signup'){
        //告诉浏览器我的内容类型是html格式,文件编码是utf-8
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.end('注册')
    }else if(method==='GET'&&url==='/signin'){
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.end('登陆')
    }else {
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.end('404 not found')
    }
}).listen(3000)
//业务全部放在一个函数里会导致该函数过大
//以后重构起来风险较大
