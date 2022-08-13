const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end(JSON.stringify({ message: 'Hello World'}));
});

server.listen(3000);