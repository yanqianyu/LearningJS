var net = require('net');
// 记录在线用户数
var count = 0; 
var users = {};

var server = net.createServer(function (conn) {
    conn.setEncoding('utf8');
    conn.write('welcome to node-chat, ' + count + ' other people are connected at this time\n');
    conn.write('please write your name and press enter:');
    count++;
    var nickname;

    function broadcast(msg, exceptMyself) {
        for (var i in users) {
            if (!exceptMyself || i != nickname) {
                users[i].write(msg);
            }
        }
    }

    conn.on('data', function(data) {
        data = data.replace('\r\n', '');
        if (!nickname) {
            if (users[data]) {
                conn.write('nickname already in use. try again:');
                return;
            } else {
                nickname = data;
                users[nickname] = conn;
                broadcast(nickname + ' joined the room\n');
            }
        } else {
            // 聊天信息
            broadcast(nickname + ' :' + data + '\n');
        }
    })
    // 断开连接
    conn.on('close', function() {
        count--;
        // 清楚users数组中对应的元素
        delete users[nickname];
        // 广播
        broadcast(nickname + ' left the room');
    });
});



// listen将sever绑定在某个端口上
server.listen(3000, function() {
    console.log('listening on *:3000');
});

