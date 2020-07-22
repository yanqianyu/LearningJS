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
    conn.on('data', function(data) {
        data = data.replace('\r\n', '');
        if (!nickname) {
            if (users[data]) {
                conn.write('nickname already in use. try again:');
                return;
            } else {
                nickname = data;
                users[nickname] = conn;
                for (var i in users) {
                    users[i].write(nickname + ' joined the room\n');
                }
            }
        } else {
            // 聊天信息
            for (var i in users) {
                // 消息发给除自己以外的其他客户端
                if (i != nickname) {
                    users[i].write(nickname + ' :' + data + '\n');
                }
            }
        }
    })
    // 断开连接
    conn.on('close', function() {
        count--;
        // 清楚users数组中对应的元素
        delete users[nickname];
    });
});



// listen将sever绑定在某个端口上
server.listen(3000, function() {
    console.log('listening on *:3000');
});

