/**
 * Created by 96004 on 2017/7/29.
 */
let mongoose=require('mongoose');
mongoose.Promise=Promise;
let conn=mongoose.createConnection('mongodb://127.0.0.1/chat');
let MessageSchame=new mongoose.Schema({
    author:String,
    content:String,
    createAt:{type:Date,default:Date.now}
});
let Message=conn.model('Message',MessageSchame);
module.exports=Message;
