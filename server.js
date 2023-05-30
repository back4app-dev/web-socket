const http = require('http');
const WebSocket = require('ws');

console.log('here 1');
console.log('here 2');
console.log('here 3');

// Create an HTTP server that responds to a request to the root path
const httpServer = http.createServer((req, res) => {
  if (req.url === '/') {
    console.log(`New request with headers: ${JSON.stringify(req.headers)}`);
    res.statusCode = 200;
    res.write('healthy');
    res.end();
  }
});

httpServer.listen(8080, () => {
  console.log('HTTP server listening on port 8080 1');
  console.log('HTTP server listening on port 8080 2');
});

// Create a WebSocket server that listens on the same port as the HTTP server
const webSocketServer = new WebSocket.Server({ server: httpServer });

webSocketServer.on('connection', (socket, request) => {
  console.log(`New client connected with headers: ${JSON.stringify(request.headers)}`);

  socket.on('message', (data) => {
    console.log(`Received message: ${data}`);

    // Echo the message back to the client
    socket.send(`You said: ${data}`);
  });

  socket.on('close', () => {
    console.log('Client disconnected1');
  });
});
