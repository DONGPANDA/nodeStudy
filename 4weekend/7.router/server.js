/**
 * Created by 96004 on 2017/7/15.
 */
let express=require('express');
let app=express();
let user=require('./routes/user');
let category=require('./routes/category')
//现在use中传入了两个参数,第一个是路径前缀,第二个时路由中间件,比如请求地址为/user/signup,就会走user中间件
app.use('/user',user);
app.use('/category',category);
app.listen(8080);