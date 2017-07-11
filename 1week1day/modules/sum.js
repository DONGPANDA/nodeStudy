/**
 * Created by 96004 on 2017/7/2.
 */
/*function sum() {
    var num=0;
    for(var i=0;i<arguments.length;i++){
        num+=arguments[i];
    }
    return num;
}*/
function sum(...arr){
    let total=0;
    arr.forEach(item=>total+=item);
    return total;
}

//导出的函数不要是箭头函数
//exports.sum=sum;
module.exports=sum;
//module.exports.sum=sum;
//global.sum=sum不推荐;