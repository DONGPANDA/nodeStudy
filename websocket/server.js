/**
 * Created by 96004 on 2017/7/29.
 */
let Server=require('ws').Server;
let server=new Server({port:8080});
server.on('connection',function (socket) {
    console.log('eva2号机已经就位');
    socket.on('message',function (msg) {
        socket.send('服务器说:'+msg)
    })
})