/**
 * Created by 96004 on 2017/7/29.
 */
let Socket=require('ws');
let socket=new Socket('ws://localhost:8080');
socket.on('open',function () {
    console.log('fuck niu');
    socket.send('hello 傻牛')
});
socket.on('message',function (msg) {
    console.log(msg);
})