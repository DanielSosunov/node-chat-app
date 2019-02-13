var socket = io();
            
socket.on('connect',function (){
    console.log(`Connected to server`);

    socket.emit('createMessage',{
        from:'Danny2',
        text:'Yoyo!'
    });
})

socket.on('disconnect',function (){
    console.log('Disconnected from server');
})

socket.on('newMessage',function(message){
    console.log('newMessage',message);
})