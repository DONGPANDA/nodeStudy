/**
 * Created by 96004 on 2017/7/8.
 */
function Person(name) {
    this.name=name;
}
Person.prototype.drink=function () {
    console.log('hello');
}
Person.a=function () {
    console.log('static');
}
function Girl(name,age) {
    Person.call(this,name,age);
    this.age=age
}
Girl.prototype.__proto__=Person.prototype
Girl.a=Person.a
//extends
/*class Person{
    constructor(name){
        this.name=name;
    }
    drink() {
        console.log('hello');
    }
    static a() {//静态方法只给类来调用
        console.log('static');
    }
}
class Girl extends Person{
    constructor(name,age) {
        super(name,age);//必须调用,相当于调用父类函数,父类函数的this指向girl
        this.age=age
    }
}*/
let girl=new Girl('llala',2)
console.log(girl.age);
console.log(girl.name);
console.log(girl.drink);
Girl.a()
/*
let person1=new Person("xxx")
console.log(person1.drink);
Person.a()*/
