/**
 * Created by 96004 on 2017/7/16.
 */
let http=require('http');
let queryString=require('querystring')
http.createServer(function (req,res) {
    let url=req.url;
    if(url=='/write'){
        let cookie=req.headers.cookie;
        let count=1
        if(cookie){
            let num=parseInt(queryString.parse(cookie,'; ').sum)
            count=num+1
        }
        res.setHeader('Content-Type','text/html;charset=utf-8')
        res.setHeader('Set-Cookie',`sum=${count}`)
        res.end('阿牛约了'+count+'次炮')
    }else{
        res.end('404')
    }
}).listen(8080)