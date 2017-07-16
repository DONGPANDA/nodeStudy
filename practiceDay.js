/**
 * Created by 96004 on 2017/7/15.
 */
console.log(parseInt('111', 2));
console.log(0xff.toString(10));
let buffer=new Buffer('牛');
console.log(buffer);
console.log(new Buffer([17, 18, 20]));
let a1={name:1};
let a2={name1:2};
let a3={name2:3};
console.log(Object.assign({}, a2, a3));
console.log(a2);

let events=require('events');
let util=require('util');
function Man() {

}
util.inherits(Man,events);
let man=new Man();
function buy() {
    console.log(1);
}
man.on('money',buy);
man.emit('money')
