var http = require('http');
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-Type': 'text/html'});
    res.end('Hello World');
});
server.listen(80);