const socket = io('http://localhost:5000');

let send = document.getElementById('send');
let message = document.getElementById('inputType_msg');
let container = document.getElementById('container');

let userName = prompt('Enter your name : ');
appendMsg(`You joined..`);

socket.emit('new-user',userName);
socket.on('user-connected',(data) => {
    appendMsg(`${data} joined the chat..`);
});
socket.on('user-disconnected',(data) => {
    appendMsg(`${data} disconnected.`);
});
socket.on('chat-message',(data) => {
    console.log('Data : ',data);
    appendMsg(`${data.user} : ${data.message}`);
});

send.addEventListener('click',(e) => {
    // e.preventDefault();
    let msg = message.value;
    // console.log("msg",msg);
    appendYourMsg(`You : ${msg}`)
    socket.emit('send-chat-message',msg);
    message.value = '';
});

function appendMsg(data){
    let newElement = document.createElement('div');
    newElement.innerText = data;
    newElement.style.backgroundColor = '#fff';
    container.append(newElement);

}

function appendYourMsg(data){
    let newElement = document.createElement('div');
    newElement.innerText = data;
    newElement.style.backgroundColor = '#e8e9ea';
    newElement.style.width = 'auto';
    newElement.style.textAlign = 'right'
    container.append(newElement);
}