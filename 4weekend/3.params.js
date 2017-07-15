/**
 * Created by 96004 on 2017/7/15.
 */
//如何载服务器中获取请求的参数
//请求行 方法名 路径(用?隔开的两部分)路径名+查询字符串 协议
let express=require('express');
let app=express();
let url=require('url')
//req,res与原生http服务器的请求响应对象是同一个,只不过增加了一些额外属性
app.get('/user',function (req,res) {
    let method=req.method;
    //pathname=/user query: name=1之类
    //let {pathname,query}=url.parse(req.url,true)
    //console.log(method,pathname,query);
    console.log(method,req.path,req.query);
    console.log(req.headers.host);
    res.end('hello')
});
//路径参数
let users=[{id:1,name:'lal'},{id:2,name:'lala'}];
app.get('/users/:id',function (req,res) {
    let id=req.params.id;
    console.log(req.params);
    let user=users.find(item=>item.id==id);
    res.end(user.name)
})
app.listen(8080);