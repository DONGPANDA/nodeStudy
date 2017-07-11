/**
 * Created by 96004 on 2017/7/8.
 */
let fs=require('fs');
let EventEmitter=require('events')
//fs里的方法 同步 异步
//读取内容必须存在,不存在则报错
//读取的内容都是buffer类型的
/*
let name=fs.readFileSync('name.txt','utf-8');
let age=fs.readFileSync('age.txt','utf-8');//同步,效率不高
let school={name,age}
console.log(school);*/

let school={}
let event=new EventEmitter();
fs.readFile('name.txt','utf-8',function (err,data) {//error first
    if(err) console.log(err);
    school.name=data
    event.emit('console')
})
fs.readFile('age.txt','utf-8',function (err,data) {//error first
    if(err) console.log(err);
    school.age=data
    event.emit('console')
})
event.on('console',out)
function out() {//判断对象里有几项,对象转化为数组
    if(Object.keys(school).length==2){
        console.log(school);
    }
}

//promise 承诺 成功 resolve 失败 reject



