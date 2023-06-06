const socket = io('http://localhost:5000');

let container = document.getElementById('containerMsg');
let msg = document.getElementById('inputType_msg');

socket.on('chat-message',(data) => {
    console.log(data);
});

container.addEventListener('click',(e) => {
    // e.preventDefault();
    console.log("e",e);
    let msg = document.getElementById('inputType_msg').value;
    console.log("msg",msg);
})