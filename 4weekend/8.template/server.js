/**
 * Created by 96004 on 2017/7/15.
 */
let express = require('express');
let path=require('path')
let app = express();
//1.设置模板引擎 ejs,handlebar,jade
app.set('view engine','ejs');
//2.设置模板的存放目录
//如果存放模板的文件夹名称叫views,这句可以不写,如果不叫,必须提供
app.set('views',path.resolve('views'));//resolve 从当前路径触发解析路径
//设置模板的渲染方法
//当express发现模板的文件后缀是html的话,会使用ejs来进行渲染
app.engine('.html',require('ejs').__express)
app.get('/',function (req,res) {
    //render 渲染绘制,express为请求对象res添加了一个render方法
    //第一个参数放模板的相对路径,所以不要以/开头,也不要以./开头
    //渲染就是将静态的模板和动态的数据对象进行混合生成html代码的过程
    //1.读取模板存放根目录下面的index.ejs文件内容2.用数据将模板替换掉 3.得到的html传给客户端
    res.render('index.ejs',{name:'阿牛',like:'小姐姐'});
})
app.get('/user',function (req,res) {
    res.render('user',{name:req.query.name,id:req.query.id})
})
app.get('/user1',function (req,res) {
    res.render('comUser.html')
});
let users=[
    {id:1,name:'a'},
    {id:2,name:'b'},
    {id:3,name:'c'}
];
app.get('/users',function (req,res) {
    res.render('users',{users})
})
app.listen(8080);