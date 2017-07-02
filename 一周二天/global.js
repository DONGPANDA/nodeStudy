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

//2.setTimeout  异步 (事件环,node 是事件环)
console.log(this);
setTimeout((data,a)=>{
    console.log(this);
},1000,"你好","啊");//setTimeout可以传参数,这里的this默认指向setTimeout自己
//使用箭头函数的话,this指向{} 一个空对象
//全局下this不是global,是个空对象

