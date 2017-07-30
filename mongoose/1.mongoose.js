/**
 * Created by 96004 on 2017/7/22.
 */
//引入模块
let mongoose =require('mongoose');
mongoose.Promise=Promise;
//返回连接对象
let conn=mongoose.createConnection('mongodb://127.0.0.1/mymongo')
let UserSchema=new mongoose.Schema({
    name:String,
    age:Number
},{collection:'user'})
let User=conn.model('User',UserSchema)//定义模型,conn.model('User')获取模型
/*User.create({name:"阿牛",age:6},function (err,doc) {
    if(err){
        console.log(err);
    }else{
        console.log(doc);
    }
});
User.create({
    name:"迟到鹏",
    age:80
},function (err,doc) {
    if(err){
        console.log(err);
    }else{
        console.log(doc);
    }
});*/
/*
User.remove({name:'迟到鹏'},function (err,result) {
    if(err){
        console.log(err);
    }else{
        console.log(result.result);
    }
})*/
let users=[];
for(let i=0;i<=10;i++){
    users.push({name:`阿牛${i}`,age:`${i}`})
}
/*User.create(users,function (err,doc) {
    if(err){
        console.log(err);
    }else{
        console.log(doc);
    }
})*/
/*User.find({age:6},function (err,doc) {
    if(err){
        console.log(err);
    }else{
        console.log(doc);
    }
});*/
/*
let condition={name:'阿牛5'};
let update={$set:{age:'100'}}
User.update(condition,update,function (err,result) {
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
})*/
//$inc increment增加,在原来的字段的基础上加1
//{_id:'5972cc9c300926088c442db2'}
/*User.update({name:'阿牛2'},{$inc:{age:200}},function (err,result) {
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
});*/
//1&0排除相当于true/false
/*User.find({name:'阿牛4'},{name:1},function (err,result) {
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
})*/
/*User.find({$or:[{name:'阿牛1'},{name:'阿牛2'}]},function (err,result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    }
)*/
//$gt $gte $lt $lte  /阿牛/
/*User.find({age:{$gt:100}},function (err,result) {
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
    }
);*/
//正则
/*User.find({name:/阿牛/},function (err,result) {
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    }
);*/
/*User.findOne({name:/阿牛/},function (err,result) {
        if(err){
            console.log(err);
        }else{
            if(result){
                console.log('登陆成功');
            }
        }
    }
);*/

/*User.findById('5972cc9c300926088c442db7',function (err,res) {
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
})*/
let pageNum=2;
let pageSize=3;
User.find().sort({age:-1}).skip((pageNum-1)*pageSize).limit(pageSize).exec(function (err,res) {
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
})

