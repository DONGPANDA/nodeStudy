/**
 * Created by 96004 on 2017/7/15.
 */
//用户相关
//引入express模块
let express=require('express');
//通过执行Router方法得到路由中间件的实例
let router=express.Router();
//router的用法和app有点像,是用来定义路由的
//当客户端以get的请求方式
router.get('/signup',function (req,res) {
    res.send('注册');
})
router.get('/signin',function (req,res) {
    res.send('登陆');
})
module.exports=router;
