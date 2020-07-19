// 依赖fs模块，同时提供同步和异步API的模块
var fs = require('fs');
var process = require('process');
var stdin = process.stdin, stdout = process.stdout;

// 异步
// process.cwd() 获取当前工作目录
fs.readdir(process.cwd(), function(err, files) {
    console.log('');
    if (!files.length) {
        return console.log('Nod files to show!\n');
    }
    console.log('Select the file or directory you want to see');

    // 数组中的每个元素都会执行这个函数
    var stats = [];
    function file(i) {
        // 获取文件名
        var filename = files[i];
        // 查看文件或目录的元数据
        // __dirname来获取执行文件时该文件在文件系统中所在的目录
        fs.stat(__dirname + '/' + filename, function(err, stat) {
            stats[i] = stat
            if (stat.isDirectory()) {
                console.log(i + '     ' + filename);
            } else {
                console.log(i + '     ' + filename);
            }
            // 计数器增加
            i++;
            if (i == files.length) {
                read();
            } else {
                // 递归处理
                file(i);
            }
        });
    }

    function read() {
        console.log('');
        stdout.write('Enter your choice: ');
        stdin.resume();
        stdin.setEncoding('utf-8');
        stdin.on('data', option);
    }

    function option(data) {
        var filename = files[Number(data)];
        if (!filename) {
            stdout.write('Enter your choice: ');
        } else {
            stdin.pause();
            if (stats[Number(data)].isDirectory()) {
                fs.readFile(__dirname + '/' + filename, function(err, files) {
                    console.log('');
                    console.log(' (' + files.length + ' files)');
                    files.forEach(file => {
                        console.log('    ' + file);
                    });
                    console.log('');
                });
            } else {
                fs.readFile(__dirname + '/' + filename, 'utf-8', function(err, data) {
                    console.log('');
                    console.log(data.replace(/(.*)/g, '     $1'));
                });
            }
        }
    }
    file(0);
})


