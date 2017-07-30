/**
 * Created by 96004 on 2017/7/29.
 */
let express=require('express');
let path=require('path');
let Message=require('./model');
let app=express();
app.use(express.static(path.resolve('../node_modules')));
app.get('/',function (req,res) {
    res.sendFile(path.resolve('index.html'))
});
let server=require('http').createServer(app);
let io=require('socket.io')(server);
const SYSTEM='客服小妹';
let sockets={};
io.on('connection',function (socket) {
    let username;
    let currentRoom;
    socket.on('message',function (msg) {
        if(username){
            let reg=/@([^ ]+) (.+)/;
            let result=msg.match(reg);
            if(result){
                let toUser=result[1];
                let content=result[2];
                sockets[toUser]&&sockets[toUser].send({
                    author:username,
                    createAt:new Date().toLocaleString(),
                    content,
                })
                socket.send({
                    author:username,
                    createAt:new Date().toLocaleString(),
                    content,
                })
            }else{
                Message.create({
                    author:username,
                    createAt:new Date().toLocaleString(),
                    content:msg
                },function (err,message) {
                    if(err){
                        console.log(err);
                    }else {
                        if(currentRoom){
                            io.in(currentRoom).emit('message', message);
                        }else{
                            io.emit('message', message);
                        }
                    }
                })

            }
        }else{
            username=msg;
            sockets[username]=socket;
            io.emit('message',{
                author:SYSTEM,
                createAt:new Date().toLocaleString(),
                content:`欢迎老爷${username}进入聊天室`
            })
        }
    })
    socket.on('getAllMessages',function () {
        Message.find().sort({createAt:-1}).limit(20).exec(function (err,message) {
            socket.emit('allMessages',message);
            socket.send({
                author:SYSTEM,
                createAt:new Date().toLocaleString(),
                content:`随意开火吧`
            });
        })
    })
    socket.on('join',function (room) {
        if(currentRoom){
            socket.leave(currentRoom)
        }else if(currentRoom!=room){
            socket.join(room);
            currentRoom=room;
            socket.emit('joined',room)
        }
    })
})
server.listen(8080);