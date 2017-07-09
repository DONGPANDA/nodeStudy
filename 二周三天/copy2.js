/**
 * Created by 96004 on 2017/7/9.
 */
let fs=require('fs')
function copy(source,target) {
    let rs=fs.createReadStream(source,{highWaterMark:4})
    let ws=fs.createWriteStream(target,{highWaterMark:1})
    rs.on('data',function (data) {
        let flag=ws.write(data)
        if(!flag) rs.pause()
    })
    ws.on('drain',function () {//抽干,将要写的全部写入后
        console.log(1);//边读边写
        rs.resume()
    })
    rs.on('end',function () {
        ws.end()
    })
}
copy('name.txt','1.txt')