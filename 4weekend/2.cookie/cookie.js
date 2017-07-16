/**
 * Created by 96004 on 2017/7/16.
 */
let http=require('http');
let queryString=require('querystring')
let server=http.createServer(function (req,res) {
    let url=req.url;
    //当url地址为write就写cookie
    if(url=='/write'){
        //第一次客户端访问服务器的时候服务器通过响应头向客户端写cookie
        res.setHeader('Set-Cookie',['name=aoliao','age=16'])
        res.end('write ok')
    }else if(url=='/read'){
       //当第二次客户端访问服务器的时候,客户端会把上次保存的cookie带回给服务器,放在请求头
        //req.header是一个对象,是从请求头中解析出来的{host://localhost:8080}
        let cookie=req.headers.cookie;
        let cookieObj=queryString.parse(cookie,'; ')
        res.end(cookie.age)
    } else{
        res.end('404')
    }
}).listen(8080)
