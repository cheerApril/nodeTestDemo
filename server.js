const express = require('express');
const app = express();

// 中间件使用 -- req.body能获取到body的数据的原因
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//定义res.success的方法
express.response.success = function (data) {
    var result = {};
    var res = this;
    result.code = 200;
    result.data = data || {};

    res.send(result);
};

//定义res.success的方法
express.response.fail = function (reason) {
    var result = {};
    var res = this;
    result.code = 404;
    result.data = reason || {};

    res.send(result);
};

const port = normalizePort(process.env.PORT || '3000');

/* 后期会使用 fs.readdir读取该文件的数据进行路由处理
 */
const userRouter = require('./routes/users.js');

app.use('/user', userRouter);
app.listen(port, function () {
    console.log(`server is listening on Post:${port}`);
});

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}