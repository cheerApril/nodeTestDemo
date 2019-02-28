const express = require('express');
const app = express();
var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const router = express.Router();
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