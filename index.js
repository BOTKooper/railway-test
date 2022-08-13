const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/json' });
    res.end(JSON.stringify({ message: 'Hello World'}));
});

const port = +(process.env.PORT || 3000);
server.listen(port, () => {
    console.log('Server running on port ' + port);
});
