const socket = io();
const btn = document.getElementById('send-btn');

btn.addEventListener('click', () => {
    const input = document.getElementById('message-to-send');
    console.log(input.value);
    socket.emit('chat message', input.value);
    input.value = '';
});

socket.on('chat message', (msg) => {
    const list = document.createElement('li');
    const msgData = document.createElement('div');
    const msgDataName = document.createElement('span');
    const msgDataTime = document.createElement('span');
    const message = document.createElement('div');

    const name = document.getElementsByClassName('name');

    list.className = 'clearfix';
    msgData.className = 'message-data';
    msgDataName.className = 'message-data-name';
    msgDataTime.className = 'message-data-time';

    message.className = 'message my-message';
    message.textContent = msg;
    msgDataName.textContent = name[0].innerHTML;

    const time = new Date();

    msgDataTime.textContent = time.toLocaleString('en-US', { hour: 'numeric', hour12: true });

    messages.appendChild(list);
    list.appendChild(msgData);
    list.appendChild(message);
    msgData.appendChild(msgDataName);
    msgData.appendChild(msgDataTime);
    window.scrollTo(0, document.body.scrollHeight);
});
