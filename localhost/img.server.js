const express = require('express');
const app = express();
const data = require('./data');

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //自定义中间件，设置跨域需要的响应头。
    next();
};

app.use(allowCrossDomain);
app.use('/', express.static('./'));
app.get('/data', function (req, res) {
    res.send(JSON.stringify(data));
})
app.listen(80);