/**
 * Created by 96004 on 2017/7/9.
 */
let fs=require('fs');
//1.写的时候默认编码是utf-8
//2.没有时会创建,写时会自动生成,如果有,写入前会先清空文件
//fs.writeFileSync('1.txt',JSON.stringify({name:"aa"}))//如果时对象需要转换成JSON字符串
//fs.appendFileSync('1.txt',1)
fs.writeFile('1.txt','你好',function (err) {
    console.log(err);
})//异步需要声明callback