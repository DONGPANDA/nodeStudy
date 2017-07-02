/**
 * Created by 96004 on 2017/7/2.
 */
//箭头函数
//箭头函数不需要function声明
//如果箭头后面是一个大括号需要写return
//箭头函数中没有this指向,所以this指向上一级,从而解决了this问题
//1.高阶函数
/*function a(b) {
 return function c(d) {
 return b+d;
 }
 }
 let a=b=>c=d=>b+d;
 console.log(a(1)(2));
 */
/*let obj = {
    a: function () {
        setTimeout(() => {
            console.log(this);//使用箭头函数改变this指向,不使用箭头函数的话指向window
        }, 1000)
    }
}
obj.a();*/

//要解决一部问题就是回调函数,将后续的逻辑当作参数传递给这个函数
//vue不能使用箭头函数
let read=(cb)=>{
    setTimeout(()=>{
        let str="lalala";
        cb(str);
    },2000)
}
read(data=>console.log(data));



