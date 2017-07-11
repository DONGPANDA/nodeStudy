/**
 * Created by 96004 on 2017/7/8.
 */
let EventEmitter=require('events');
let Util=require('util');
function Man() {

}
Util.inherits(Man,EventEmitter)
let man = new Man();
function buyCar(h1,h2) {
    console.log('buy car'+h1+h2);
}
function buyPack(h1,h2) {
    console.log('buy pack'+h1+h2);
}
man.on('money',buyCar);
man.once('money',buyPack);//once只触发一次,触发后删除
//man.removeListener('money',buyCar);
//man.removeListener('money',buyPack);
man.emit('money','妹1','妹2');
man.emit('money','妹1','妹2');