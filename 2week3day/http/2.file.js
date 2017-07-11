/**
 * Created by 96004 on 2017/7/9.
 */
let http = require('http');
let fs = require('fs')
//一个三方模块,处理mime
let mime = require('mime');
let url=require('url')//可以将路径转化为对象,
//监听函数当,浏览器访问客户端时进行
http.createServer(function (req, res) {
    let {pathname,query} = url.parse(req.url,true);
    console.log(pathname, query);
    if (pathname === '/') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8;')
        fs.createReadStream('index.html').pipe(res)
    } else {
        let flag = fs.existsSync('.' + pathname)
        if (flag) {
            res.setHeader('Content-Type', mime.lookup(pathname) + ';charset=utf-8');
            //判断路径是否存在,存在再读取
            fs.createReadStream('.' + pathname).pipe(res)
        } else {
            res.statusCode = 404;
            res.end('not found')
        }
    }
    //res.setHeader('Content-Type','text/html;charset=utf-8;')
    /*fs.readFile('index.html',function (err,data) {
     if(err) return console.log(err);
     res.end(data)
     })*/
    //fs.createReadStream('index.html').pipe(res)//会自动调用可写流的write和end方法
}).listen(3000)

//服务端不识别../路径,读取时可以采用../路径