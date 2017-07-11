/**
 * Created by 96004 on 2017/7/8.
 */
//promise 承诺 成功 resolve 失败 reject
//浏览器内置,node中 天生支持,构造函数
let fs=require('fs')
/*function buyPack() {
    return new Promise(function (resolve,reject) {
        setTimeout(function () {
            if(Math.random()*10>5){
                resolve('ok')
            }else{
                reject()
            }
        },500)
    })
}*/
/*buyPack().then(function (data) {
    console.log(data+'success');
},function () {
    console.log('error');
});*/
/*
buyPack().then(data=>{
    console.log(data+'success');
}).catch(()=>{
    console.log('error');
})*/
let school={}
function readN(url) {
    return new Promise(function (resolve,reject) {
        fs.readFile(url,'utf-8',function (err,data) {
            if(err)reject(err);
            resolve(data)
        })
    })
}
/*readN('name.txt').then(data=>{
    school.name=data
    console.log(school);
}).catch(err=>{
    console.log(err);
})*/
//在all中都成功才成功,有一个失败就失败
Promise.all([readN('name.txt'),readN('age.txt')]).then(function ([name,age]) {
        let school={
            name,age
        }
    console.log(school);
})

//虽然改写成了异步,但是仍然解决不了大文件读写的问题,会淹没内存,希望的是边读边写,流帮我们解决边读边写,gulp基于流

