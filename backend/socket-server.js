const WebSocket = require('ws');

const server = new WebSocket.Server({
  port: 8080
});

let sockets = [];
server.on('connection', function(socket) {
  console.log('onConnection.socket');

  sockets.push(socket);

  setInterval(() => {
    sockets.forEach(s=>s.send('hey'));
  }, 1000);


  socket.on('close', function() {
    console.log('onClose.socket');
    sockets = sockets.filter(s => s !== socket);
  });
});

module.exports = sockets;
