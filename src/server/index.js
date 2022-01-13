// const http = require('http');
// const events = require('./events');
// const server = require('./server');

// const port = server.get('port');

// events.bind(
//     http.createServer(server).listen(port),
// );

// eslint-disable-next-line spaced-comment
/////////////////////////////////////////////////

// const express = require('express');
// const { Server } = require('socket.io');
// const http = require('http');

// const server = require('./server');
// const events = require('./events');

// // const app = express();
// // const http = require('http');

// // const server = http.createServer(app);
// // const { Server } = require('socket.io');

// const io = new Server(server);

// io.on('connection', (socket) => {
//     console.log('a user connected');
// });

// // server.listen(3000, () => {
// //     console.log('listening on *:3000');
// // });

// const port = server.get('port');

// events.bind(
//     http.createServer(server).listen(port),
// );

// ************************************************************************

const { Server } = require('socket.io');
const http = require('http');
const events = require('./events');
const server = require('./server');
const chatEvents = require('../components/chat/events');

const port = server.get('port');

const socketIoServer = http.createServer(server);
const io = new Server(socketIoServer);
chatEvents(io);
// io.on('connection', (socket) => {
//     console.log('New socket connected!');
// });
// const ser = http.createServer(server).listen(port);
// const io = socketio(ser);

events.bind(
    // http.createServer(server).listen(port),
    socketIoServer.listen(port),
);
