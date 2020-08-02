var express = require('express');

var app = express();
var search = require('./search');

// 指定使用的模板引擎
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
    // render方法：初始化模板引擎、读取视图文件并将其传递给模板引擎、获取解析后的HTML页面并作为响应发送给客户端
    res.render('index');
})

app.get('/search', function (req, res, next) {
    search(req.query.q, function(err, tweets) {
        if (err) {
            return next(err);
            res.render('search', {
                results: tweets,
                search: req.query.q
            });
        }
    });
});

app.listen(3000);