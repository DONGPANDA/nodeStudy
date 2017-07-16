/**
 * Created by 96004 on 2017/7/16.
 */
let express=require('express');
let router=express.Router();
let users=[{username:"a",password:1}];
router.get('/signup',function (req,res) {
    //渲染一个模板,返回一个注册表单
    res.render('signup')
});
router.post('/signup',function (req,res) {
    let user=req.body;
    let olduser=users.find(item=>item.username==user.username)
    if(olduser){
        res.redirect('back')
    }else{
        users.push(user);
    }
    //所有的路径都必须以/开头
    res.redirect('/user/signin')
});
router.get('/signin',function (req,res) {
    res.render('signin')
});
router.post('/signin',function (req,res) {
    let user=req.body;
    /*if(users.some(item=>item==user)){
        res.redirect('/user/welcome')
    }*/
    let flag=users.some(item=>item.username==user.username&&item.password==user.password)
    if(flag){
        res.redirect('/user/welcome')
    }else{
        res.redirect('back')
    }

});
router.get('/welcome',function (req,res) {
    res.render('welcome')
});
module.exports=router;