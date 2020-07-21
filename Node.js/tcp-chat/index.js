var net = require('net');
var server = net.createServer(function (conn) {
    console.log('new connection');
});

server.listen(3000, function() {
    console.log('listening on *:3000');
});

