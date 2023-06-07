
const io = require('socket.io')(5000,{
    cors:{
        origin:'http://localhost:3000',
    }
});


const users = {};
io.on('connection',(socket) => {
    // socket.emit('chat-message','hello..');
    socket.on('new-user',(userName) => {
        users[socket.id] = userName;
        socket.broadcast.emit('user-connected',userName);
    })
    socket.on('send-chat-message',(msg) => {
        console.log('socket :',msg);
        socket.broadcast.emit('chat-message',{message :msg ,user : users[socket.id] });
    })
    socket.on('disconnect',() => {
        socket.broadcast.emit('user-disconnected',users[socket.id]);
        delete users[socket.id];
    })
});
