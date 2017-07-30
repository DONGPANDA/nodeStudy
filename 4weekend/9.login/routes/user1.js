/**
 * Created by 96004 on 2017/7/16.
 */
let express = require('express');
let session =require('express-session');
let router=express.Router();
router.use(session({
    resave:true,
    saveUninitialized:true,
    secret: 'dongdongge'
}))
router.get('/signup',function (req,res) {
    res.render('signup')
});
router.post('/signup',function (req,res) {
    let user=req.session
    if(!user[req.body.username]){
        user[req.body.username]=req.body;
        res.redirect('/user/signin')
    }else{
        res.redirect('back')
    }
});
router.get('/signin',function (req,res) {
    res.render('signin')
});
router.post('/signin',function (req,res) {
    let user=req.session;
    if(user[req.body.username]){
        user[req.body.username].flag=1
    }
    res.redirect('/user/welcome');
});
router.get('/welcome',function (req,res) {
    let user=req.session;
    for(let k in user){
        if(user[k].flag){
            console.log(user);
            res.send(`welcome:${user[k].username}`)
        }
    }
})
module.exports=router;
