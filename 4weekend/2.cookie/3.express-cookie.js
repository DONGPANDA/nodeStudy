/**
 * Created by 96004 on 2017/7/16.
 */
let express=require('express');
let cookieParser=require('cookie-parser')
let app=express();
app.use(cookieParser())
app.get('/write',function (req,res) {
    //express为我们提供的方法cookie,让我们更方便的输入coolie
    /*res.cookie('name','aoliao',{
        //域名的意思就是说此cookie归哪个域名所有,规定只有在向指定域名发起请求的时候才发送cookie
        domain:'a.dd.cn'
    })*/
    /*res.cookie('name','aoliao',{
        //规定此cookie是那个路径所有,规定客户端访问哪个路径时候才会发送cookie
        path:'/read2'
    })
    res.send('ok')*/
    res.cookie('name','aoliao',{
        //设置cookie的过期事件,只要到了指定的事件之后,此cookie会被立刻销毁
        expires: new Date(Date.now()+10*1000)
    })
    res.send('ok')
});
app.get('/read',function (req,res) {
    //req.cookies就是req.headers.cookie转成的对象
    res.send(req.cookies)
})
app.get('/read2',function (req,res) {
    //req.cookies就是req.headers.cookie转成的对象
    res.send(req.cookies)
})
app.listen(8080);