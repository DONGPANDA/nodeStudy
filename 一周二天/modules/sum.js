/**
 * Created by 96004 on 2017/7/2.
 */
function sum() {
    var num=0;
    for(var i=0;i<arguments.length;i++){
        num+=arguments[i];
    }
    return num;
}

//exports.sum=sum;
module.exports=sum;