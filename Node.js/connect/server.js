var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    if ('GET' == req.method && '/images' == req.url.substr(0, 7) && '.jpg' == req.url.substr(-4)) {
        // fs.stat检查文件是否存在
        fs.stat(__dirname + req.url, function (err, stat) {
            if (err || !stat.isFile()) {
                // 文件不存在
                res.writeHead(404);
                res.end('Not Found');
                return;
            }
            serve(__dirname + req.url, 'application/jpg');
        });
    } else if ('GET' == req.method && '/' == req.url) {
        // 响应index.html
        serve(__dirname, + '/index.html', 'text/html');
    } else {
        res.writeHead(404);
        res.end('Not found');
    }

    // 根据文件路径获取文件内容
    // 并添加'Content-Type'头信息
    function serve(path, type) {
        res.writeHead(200, {'Content-Tyoe': type});
        // 文件系统流接到http响应流中
        fs.createReadStream(path).pipe(res);
    }
});

server.listen(3000);