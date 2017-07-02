/**
 * Created by 96004 on 2017/7/2.
 */
let obj={
    //对象中的函数冒号和function关键字可以省略
    "+"(a,b){
        return a+b
    },
    "-"(a,b){
        return a-b
    }
}
exports.obj=obj;

/*
let a="b";
let obj={
    [a]:1
};
console.log(obj); es6语法,取a对应的值作为key*/
