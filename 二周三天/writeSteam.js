/**
 * Created by 96004 on 2017/7/9.
 */
let fs=require('fs');
//1.如果文件不存在,自动创建,2.写默认都是utf-8格式,3.每次写入最大时16k,读64写16 就占用了可用内存
let ws=fs.createWriteStream('./age.txt',{highWaterMark:1});//限定写的大小
ws.write('niu')//写入必须是字符串或者buffer,write是异步的,他还有返回值
let flag=ws.write('牛');//flag只是一个条件,可以告诉当前是否还需要继续读取吗,如果返回false,就会限制读的速率,让读取暂停
console.log(flag);
ws.end('吃的好疼')//强制将没写入的全部写入,然后关闭
//ws.write('再吃')//报错,'write after end'因为end以后不能再write