/**
 * Created by 96004 on 2017/7/9.
 */
let fs=require('fs')
/**
 *
 * @param source 需要拷贝的
 * @param target 拷贝出的
 */
function copySync(source,target) {
    //1.先读取source,在写入target
    let txt=fs.readFileSync(source);//读出来的是buffer内容,写的时候再把buffer内容转回去
    fs.writeFileSync(target,txt)
}
//copySync('1.txt','3.txt')

function copy(source,target,callback) {
    fs.readFile(source,function (err,data) {
        if(err)return callback(err)
        fs.writeFile(target,data,callback)
    });

}
copy('1.txt','4.txt',function (err) {
    console.log(err);
})
