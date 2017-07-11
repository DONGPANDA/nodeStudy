/**
 * Created by 96004 on 2017/7/9.
 */
//可读流readStream writeStream 可写流 有顺序,有起点和终点,不关心文件的整体内容,只关心读到的内容
let fs=require('fs');
let rs = fs.createReadStream('./name.txt',{highWaterMark:1})//读时必须要有文件,highWaterMark 默认64k,分段读取,1表示一个字节
//默认读取的都是buffer
//默认这种模式,叫非流动模式 ->流动模式
console.log(rs);
let ary=[]
rs.on('data',function (data) {//监听data,node不停的rs.emit('data',data)
    console.log(data);
    ary.push(data)
    rs.pause();
    setTimeout(function () {
        rs.resume()
    },1000)
})
rs.on('end',function () {
    console.log(Buffer.concat(ary).toString());
})
rs.on('error',function (err) {
    console.log(err);
})

//on('data'),on('end'),on('error'),pause(),resume()