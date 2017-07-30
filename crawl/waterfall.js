/**
 * Created by 96004 on 2017/7/30.
 */
let async=require('async');
async.waterfall([
    function (callback) {
        setTimeout(()=>{
            console.log('买瓜');
            callback(null,'瓜');
        },2000)
    },
    function (data,callback) {
        setTimeout(()=>{
            console.log(`切${data}`);
            callback(null,'瓜');
        },2000)
    },
    function (data,callback) {
        setTimeout(()=>{
            console.log(`吃${data}`);
            callback(null,'瓜');
        },2000)
    }
],function (err,result) {
    console.log(arguments);
})