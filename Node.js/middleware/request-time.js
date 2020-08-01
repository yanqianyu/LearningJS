module.exports = function(opts) {
    var time = opts.time || 100;
    return function (req, res, next) {
        var timer = setTimeout(function() {
            console.log(
                '\033[90m%s %s\033[39m \033[91mis taking too long!\033[39m'
              , req.method
              , req.url
            );
        }, time);

        var end = res.end;
        res.end = function (chunk, encoding) {
            // 对原始函数的引用
            res.end = end;
            res.end(chunk, encoding);
            // 清除计时器
            clearTimeout(timer);
        };
        next();
    };
};


// 中间件 是一种功能的封装方式，就是封装在程序中处理http请求的功能
// 中间件一般是一个有3个参数的函数：一个请求对象、一个响应对象和一个next函数
// 如果不调用next函数，请求就在这个中间件终止了
// 中间件 串行执行？