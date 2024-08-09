// script.js
const socket = io();

const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const messages = document.getElementById('messages');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim()) {
        socket.emit('chat message', message);
        messageInput.value = '';
    }
});

socket.on('chat message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = msg;
    messages.appendChild(messageElement);
    messages.scrollTop = messages.scrollHeight;
});