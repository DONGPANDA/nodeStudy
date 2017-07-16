/**
 * Created by 96004 on 2017/7/16.
 */
let express=require('express');
let session=require('express-session')
let app=express();
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:'dong'
}))
app.get('/write',function (req,res) {
    //每次使用了session中间件之后,会在请求req上多一个session属性
    req.session.name='dong';
    res.send('write ok');
});
app.get('/read',function (req,res) {
    res.send(req.session.name)
})
app.listen(8080)