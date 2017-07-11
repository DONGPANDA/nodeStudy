/**
 * Created by 96004 on 2017/7/2.
 */
//引用文件模块必须使用相对路径,可以不增加后缀名,会自动帮你添加先加.js 没有就加 .json .node...报错
//同步还是异步怎么区分?有回调函数的是异步
let calc = require('./calc');//没有回调函数是同步方法
//通过require拿到的并不是另一个问价的exports对象,而是另一个文件的module.exports对象
//module.exports exports
//1.可以给exports增加属性
//2.直接更给module.exports的指向
//3.错误:直接给exports赋值,不会改变module.exports
/*
(function () {
    module.exports=exports={};
    this=module.exports;
    return module.exports;
})()*/
