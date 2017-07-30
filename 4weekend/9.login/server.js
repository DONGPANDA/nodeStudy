/**
 * Created by 96004 on 2017/7/16.
 */
let express=require('express');
let path=require('path')
let bodyParser=require('body-parser')
let app=express();
//使用中间件来解析请求体,并把请求体的内容转成对象并挂载到req.body上
//基本上所有的中间件都是函数,都需要执行
//此请求体可以解析编码后的url请求体,把请求体转为对象
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','html');
app.set('views',path.resolve('views'))
app.engine('.html',require('ejs').__express)
let user=require('./routes/user1')
//user是一个变量,指向模块的导出对象,如果请求路径是以/user开头,会交由user中间件进行处理
/*app.get('/bootstrap/dist/css/bootstrap.css',function (req,res) {
    //把一个路径里的文件读出来发送给客户端
    res.sendFile(path.resolve('../node_modules/bootstrap/dist/css/bootstrap.css'))
})*/
//使用一个静态文件中间件,参数是一个静态文件的根目录
app.use(express.static(path.resolve('../node_modules')))
app.use('/user',user)
app.listen(8080);