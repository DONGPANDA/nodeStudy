/**
 * Created by 96004 on 2017/7/8.
 */
/*function Man() {
    this._events={};
}
Man.prototype.on=function (eventName,callback) {
    if(this._events[eventName]){
        this._events[eventName].push(callback)
    }else{
        this._events[eventName]=[callback]
    }
}
//forEach forIn for的区别,forEach 声明式,for in非声明式,forEach不能中断(return)
//let ary=[...[1,2,3],...[5,6,7]]//[1,2,3,4,5,6,7] es6语法

/!*let obj1={name:"lala"}
let obj2={age:18}
let obj={...obj1,...obj2}*!/ //extend es7语法,node不支持

Man.prototype.emit=function (eventName,...arr) {//除了第一个,剩下的组成数组
    //在参数中是剩余运算符,还可以用作展开运算
    if(this._events[eventName]){
        this._events[eventName].forEach(item=>item.call(this,...arr));//将数组展开
    }
}
Man.prototype.removeListener=function (eventName,callback) {
    if(this._events[eventName]){
       this._events[eventName]=this._events[eventName].filter(cb=>{
           return cb!==callback&&cb.cb!==callback
       })//true,表示放到新数组,返回false表示去除
    }
}
Man.prototype.once=function (eventName,callback) {
    function one(...arr) {//触发one函数,调用原有执行的函数
        callback(...arr)
        this.removeListener(eventName,one)
    }
    this.on(eventName,one);
    one.cb=callback;
}*/

function Man() {
    this._events={};
}
Man.prototype.on=function (eventName,callback) {
    if(this._events[eventName]){
        this._events[eventName].push(callback)
    }else{
        this._events[eventName]=[callback]
    }
}
Man.prototype.once=function (eventName,callback) {
    function one(...arr) {
        callback(...arr);
        this.removeListener(eventName,one)
    }
    this.on(eventName,one)
    one.cb=callback
}
Man.prototype.emit=function (eventName,...arr) {
    if(this._events[eventName]){
        this._events[eventName].forEach(item=>item.call(this,...arr))
    }
}
Man.prototype.removeListener=function (eventName,callback) {
    if(this._events[eventName]){
        this._events[eventName]=this._events[eventName].filter(cb=>{
            return cb!==callback&&cb.cb!==callback
        })
    }
}

let man = new Man();
function buyCar(h1,h2) {
    console.log('buy car'+h1+h2);
}
function buyPack(h1,h2) {
    console.log('buy pack'+h1+h2);
}
man.on('money',buyCar);
man.once('money',buyPack);//once只触发一次,触发后删除
man.removeListener('money',buyCar);
//man.removeListener('money',buyPack);
man.emit('money','妹1','妹2');
man.emit('money','妹1','妹2');

