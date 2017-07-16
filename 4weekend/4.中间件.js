/**
 * Created by 96004 on 2017/7/15.
 */
let express=require('express');
let app=express();
//使用中间件函数
//没有路径则意味着可以匹配所有路径
//没有方法,意味可以匹配所有方法
app.use(function (req,res,next) {
    //next是一个函数,调用它的话可以使请求向下继续执行
    next();
})
//中间件是一个函数,每当请求到来时就会执行
//中间件和路由的执行顺序和排列顺序严格相等
//一旦匹配到路由,就不会往下进行了
app.get('/home',function (req,res) {
    res.end('首页')
})
app.listen(8080);