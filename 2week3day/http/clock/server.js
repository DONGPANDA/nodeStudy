
let http = require('http');
let fs = require('fs')
let mime = require('mime');
let url=require('url')
http.createServer(function (req, res) {
    let {pathname,query} = url.parse(req.url,true);
    if (pathname === '/') {
        res.setHeader('Content-Type', 'text/html;charset=utf-8;')
        fs.createReadStream('index.html').pipe(res)
    }else if(pathname==='/clock'){
        let date=new Date().toLocaleString();
        console.log(date);
        res.end(JSON.stringify({date}))
    } else {
        let flag = fs.existsSync('.' + pathname)
        if (flag) {
            res.setHeader('Content-Type', mime.lookup(pathname) + ';charset=utf-8');
            fs.createReadStream('.' + pathname).pipe(res)
        } else {
            res.statusCode = 404;
            res.end('not found')
        }
    }
}).listen(3000)