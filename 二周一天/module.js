/**
 * Created by 96004 on 2017/7/8.
 */
let Util=require('util');//核心模块
//util是核心模块 inherits,js中的继承 也可以检测数据类型
function Person(name){
    this.name=name
}
Person.prototype.drink=function () {
    console.log('hello');
};
function Girl(name,age) {
    //Person.call(this,name,age);//父类在子类中执行,将this变成子类,子类就可以得到父类私有属性
}
//Girl.prototype=new Person()//原型继承,缺点,new 父类时不能传递参数
//Girl.prototype.__proto__=Person.prototype//继承父类公有属性
//Object.create(obj)方法

//es6 extends继承

//Object.setPrototypeOf()
//Object.setPrototypeOf(Girl.prototype,Person.prototype)//相当于Girl.prototype.__proto__=Person.prototype

//util.inherits(Girl,Person);只继承公有
Util.inherits(Girl,Person)
console.log(Girl.drink);
//console.log(Util.isArray({}));//false
//基本数据类型:string boolean null undefined symbol Object
//console.log(Util);

