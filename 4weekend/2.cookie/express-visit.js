/**
 * Created by 96004 on 2017/7/16.
 */
let express=require('express');
let cookieParser=require('cookie-parser');
let app=express();
app.use(cookieParser())
app.get('/visit',function (req,res) {
    let visit=req.cookies.visit
    if(visit){
        visit=parseInt(visit)+1;
    }else{
        visit=1
    }
    res.cookie('visit',visit)
    res.send(`欢迎冬哥第${visit}次来天上人间`)
})
app.listen(8080);