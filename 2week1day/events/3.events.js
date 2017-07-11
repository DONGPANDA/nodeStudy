/**
 * Created by 96004 on 2017/7/8.
 */
class Man{
    constructor() {
        this._events={}
    }
    on(eventName,callback) {
        if(this._events[eventName]){
            this._events[eventName].push(callback)
        }else{
            this._events[eventName]=[callback]
        }
    }
    emit(eventName,...arr) {
        if(this._events[eventName]){
            this._events[eventName].forEach(item=>item(...arr))
        }
    }
    removeListener(eventName,callback) {
        if(this._events[eventName]){
            this._events[eventName]=this._events[eventName].filter(cb=>{
                return cb!==callback&&cb.cb!==callback
            })
        }
    }
    once(eventName,callback) {
        let one=(...arr)=>{
            callback(...arr);
            this.removeListener(eventName,callback)
        }
        this.on(eventName,one)
        one.cb=callback
    }
}
var person=new Man();
let buyCar=(h)=>{
    console.log('buy car'+h);
}
let buyPack=(h)=>{
    console.log('buy pack'+h);
}
person.on('money',buyPack);
//person.once('money',buyCar);
person.emit('money','MM')
person.removeListener('money',buyPack)
person.emit('money','MM')