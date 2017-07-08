/**
 * Created by 96004 on 2017/7/8.
 */
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
Man.prototype.emit=function (eventName) {
    if(this._events[eventName]){
        this._events[eventName].forEach(item=>item());
    }
}
let man = new Man();
function buyCar() {
    console.log('buy car');
}
function buyPack() {
    console.log('buy pack');
}
man.on('money',buyCar);
man.on('money',buyPack);
man.emit('money')