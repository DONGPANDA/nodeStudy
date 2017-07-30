/**
 * Created by 96004 on 2017/7/30.
 */
let async=require('async');
async.series([
    function (cb) {
        setTimeout(()=>{
            console.log(1);
            cb(null,'1')
        },1000)
    },
    function (cb) {
        setTimeout(()=>{
            console.log(2);
            cb(null,'2')
        },3000)
    }
],function (err,result) {
    console.log(arguments);
})
