/**
 * Created by 96004 on 2017/7/15.
 */
let exprss =require('express');
let app=exprss();
let http=require('http')
let STATUS_CODE={
    200:'Congratulations'
}
app.use(function (req,res,next) {
    let method=req.method;
    res.setHeader('Content-Type','text/html;charset=utf-8')
    console.log(method, req.path);
    //自己模拟send
    res.mysend=function (params) {
        let type=typeof params;
        switch (type){
            case 'object':
                params=JSON.stringify(params);
                break;
            case 'number':
                res.statusCode=params;
                params=STATUS_CODE[params]
                break;
            default:
                params=params.toString();
        }
        res.end(params);
    }
    next();
});
//中间件作用
//1.可以编写一些公共的逻辑,所有路由公用
//2.添加一些公用的属性和方法,req.path req.query 方法:res.send()用来向客户端发送响应体,优点,end只能接收字符串,send可以接受任意类型,string,Buffer 对象,数组,数字,send和end一样,一旦调用不会再次调用write或end方法了,载send方法其实调用了end,核心就是不管传的什么类型,我都转换为string 传给end

app.get('/user1',function (req,res) {
    res.mysend({name:'阿牛'})
});
app.get('/user2',function (req,res) {
    res.send(200)
})
app.listen(8080);