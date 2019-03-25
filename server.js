const express = require('express');
const path = require(`path`);
const multer = require(`multer`);
const app = express();
//中间件使用 req.body (HTTP 请求头headers content_type form-data 获取到文本或者文件的原因)
//警告: 确保你总是处理了用户的文件上传。
// 永远不要将 multer 作为全局中间件使用，因为恶意用户可以上传文件到一个你没有预料到的路由，应该只在你需要处理上传文件的路由上使用。
//var storage = multer.memoryStorage() // 内存存储引擎将文件存储在内存中的 Buffer 对象，它没有任何选项。
// var upload = multer({ storage: storage })
//警告: 当你使用内存存储，上传非常大的文件，或者非常多的小文件，会导致你的应用程序内存溢出。


const upload = multer();
// 中间件使用 -- req.body能获取到body的数据的原因(HTTP 请求头headers content_type x-www-form-urlencoded)
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//模板中间件设置(设置相关文件 + 模块)
app.set(`views`, path.join(__dirname, `./views`));
app.set(`view engine`, `pug`);

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

/*
 后期会使用 fs.readdir读取该文件的数据进行路由处理

 */
const indexRouter = require(`./routes/index.js`);
const adminRouter = require(`./routes/admin.js`);
const userRouter = require('./routes/users.js');
//
// //增加测试接口
// app.use(`/test`, upload.single(`image`), function (req, res, next) {
//     console.log(typeof req.body);
//     res.success(req.file);
// });

app.use(`/`, indexRouter);
app.use('/user', userRouter);
app.use(`/admin`, adminRouter);

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