/**
 * Created by 96004 on 2017/7/9.
 */
let fs=require('fs')
function copy(source,target) {
    let rs=fs.createReadStream(source,{highWaterMark:4})
    let ws=fs.createWriteStream(target,{highWaterMark:1})
    rs.pipe(ws)//可读流的pipe 管道,异步,读一点,写一点,保证不淹没可用内存
}
copy('name.txt','1.txt')

//什么时候用readFile,什么时候用pipe
//readFile可以看到读取的内容 pipe看不到的

//path 内置模块 resolve join
let path=require('path')
console.log(path.resolve('dist'));//给相对,返回绝对 C:\Users\96004\nodeStudy\2week3day\dist
console.log(path.join(__dirname, 'dist'));//__dirname当前目录的路径 C:\Users\96004\nodeStudy\2week3day\dist