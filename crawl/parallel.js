/**
 * Created by 96004 on 2017/7/30.
 */
let async=require('async');
console.time('cost');
async.parallel([
    function (callback) {
        setTimeout(()=>{
            console.log(1);
            callback(null,'1');
        },2000)
    },
    function (callback) {
        setTimeout(()=>{
            console.log(2);
            callback(null,'2');
        },3000)
    }
],function (err,result) {
    console.log(arguments);
    console.timeEnd('cost');
})