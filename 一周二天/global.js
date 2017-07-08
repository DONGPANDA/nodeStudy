/**
 * Created by 96004 on 2017/7/2.
 */
//只要在文件中,可以不用声明直接使用的都叫全局对象
//服务端没有window/点击事件/ajax请求
//服务端有global,global上的对象都可以直接访问->全局对象

//console.log(global);
//process 进程
//Buffer 缓存区(表示内存)
//clearImmediate setImmediate
//clearInterval setInterval
//clearTimeout setIimeout
//console ->log dir info error warn time timeEnd
//1.console
/*console.time("a");
setTimeout(function () {
    console.timeEnd("a")
},2000)*/

//因为配置过node可以右键run,可以在命令行下执行某个文件
//在命令行下可以用node加文件名执行

//2.setTimeout  异步 (事件环,node 是事件环) 两个小本本 第一个小本本同步事件 第二个小本本异步
console.log(this);
setTimeout((data,a)=>{
    console.log(this===module.exports);
},1000,"你好","啊");//setTimeout可以传参数,这里的this默认指向setTimeout自己
//使用箭头函数的话,this指向{} 一个空对象
//全局下this不是global,是个空对象

//3.setImmediate 立即 异步的 第二个小本本上的
//一般情况和不写时间的setTimeout是一样的

//4.process进程 设置环境变量 生产环境,开发环境
//在开发的时候输出我很帅,上线的时候输出我非常帅
//console.log(process.env);//enviroment 两个系统 mac window
//设置环境变量通过 set a=b形式设置,可以通过process.env取出来,只能在命令行下使用,可以区分开发环境
/*if(process.env.NODE_ENV==='dev'){
    console.log("阿牛很傻");
}else {
    console.log("阿牛很帅");
}*/
//console.log(process.env);输出进程的环境变量

//5.global 服务端的全局变量 挂在在golbal上的属性可以直接获取
//var 声明的不能挂在global上面,为了解决模块化的问题

//模块化

