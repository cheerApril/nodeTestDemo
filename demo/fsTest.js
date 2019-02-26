/**
 * 使用的网络图片
 * 相关的API 来自于 http://nodejs.cn/api/fs.html#fs_class_fs_stats
 * 参考文献: https://segmentfault.com/a/1190000011343017?utm_source=tag-newest
 * https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%9B%E6%9C%88%E6%98%AF%E4%BD%A0%E7%9A%84%E8%B0%8E%E8%A8%80%E5%A3%81%E7%BA%B8&step_word=&hs=2&pn=15&spn=0&di=186515572540&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1431767459%2C4197389195&os=1172505108%2C194123551&simid=0%2C0&adpicid=0&lpn=0&ln=1924&fr=&fmq=1551146871185_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fikmoe.com%2Fwp-content%2Fuploads%2Fwp-img%2F2017%2F05%2Fmoeik-2017-05-24_13-53-06_812105.jpg%3FimageView2%2F1%2Fw%2F375%2Fh%2F250%2Fq%2F100&fromurl=ippr_z2C%24qAzdH3FAzdH3Fth45j_z%26e3Bv54AzdH3Fmnlm_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=&force=undefined
  */

const fs = require('fs');
const imageUrl = "https://image.baidu.com/search/detail?ct=503316480&z=0&ipn=d&word=%E5%9B%9B%E6%9C%88%E6%98%AF%E4%BD%A0%E7%9A%84%E8%B0%8E%E8%A8%80%E5%A3%81%E7%BA%B8&step_word=&hs=2&pn=15&spn=0&di=186515572540&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&istype=0&ie=utf-8&oe=utf-8&in=&cl=2&lm=-1&st=undefined&cs=1431767459%2C4197389195&os=1172505108%2C194123551&simid=0%2C0&adpicid=0&lpn=0&ln=1924&fr=&fmq=1551146871185_R&fm=&ic=undefined&s=undefined&hd=undefined&latest=undefined&copyright=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&ist=&jit=&cg=&bdtype=0&oriquery=&objurl=http%3A%2F%2Fikmoe.com%2Fwp-content%2Fuploads%2Fwp-img%2F2017%2F05%2Fmoeik-2017-05-24_13-53-06_812105.jpg%3FimageView2%2F1%2Fw%2F375%2Fh%2F250%2Fq%2F100&fromurl=ippr_z2C%24qAzdH3FAzdH3Fth45j_z%26e3Bv54AzdH3Fmnlm_z%26e3Bip4s&gsm=0&rpstart=0&rpnum=0&islist=&querylist=&force=undefined";
/**
 * fs.stat(path[, options], callback)#

    path <string> | <Buffer> | <URL>
    options <Object>
    callback <Function>
        err <Error>
        stats <fs.Stats>
        异步的 stat(2)。 回调有两个参数 (err, stats)，其中 stats 是 fs.Stats

 该方法用于检测文件的状态，可以借此来判断某个文件是否存在。
 */
fs.stat('./read.txt', function (err, stats) {
    if(err) throw err;
    // console.log(stats);
});

/**
 * fs.readFile(path[, options], callback)#
 
 path <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。
 options <Object> | <string>

 encoding <string> | <null> 默认值: null。
 flag <string> 参阅支持的文件系统标志。默认值: 'r'。
 callback <Function>
 err <Error>
 data <string> | <Buffer>
 */
fs.readFile('./read.txtas' , function (err, data) {
    if(err) throw err;
    console.log(data);
});
/**
 * fs.writeFile(file, data[, options], callback)#

 file <string> | <Buffer> | <URL> | <integer> 文件名或文件描述符。
 data <string> | <Buffer> | <TypedArray> | <DataView>
 options <Object> | <string>
    encoding <string> | <null> 默认值: 'utf8'。
    mode <integer> 默认值: 0o666。
    flag <string> 参阅支持的文件系统标志。默认值: 'w'。
 callback <Function>
 err <Error>
 异步地将数据写入到文件，如果文件已存在则覆盖该文件。 data 可以是字符串或 buffer。
 */
//1.如果 options 是字符串，则它指定字符编码：
//2.如果当前文件路径或者文件名不存在的话就创建一个新的文件
//3. 如果文件存在, 整体覆盖改文件的所有内容
fs.writeFile('./read.txt', 'hello, cheer rewrite', 'utf-8', function (err) {
    if(err) throw err;
    fs.readFile('./read.txt' ,'utf-8', function (err, data) {
        if(err) throw err;
        console.log(data);
    });
});

/**
 * fs.appendFile(path, data[, options], callback)#

 path <string> | <Buffer> | <URL> | <number> 文件名或文件描述符。
 data <string> | <Buffer>
 options <Object> | <string>

 encoding <string> | <null> 默认值: 'utf8'。
 mode <integer> 默认值: 0o666。
 flag <string> 参阅支持的文件系统标志。默认值: 'a'。
 callback <Function>

 err <Error>
 异步地将数据追加到文件，如果文件尚不存在则创建该文件。 data 可以是字符串或 Buffer。
 * 该方法可用于往指定文件当中追加写入内容，该内容不会覆盖文件当中原有的内容，只会在原有内容的基础上进行追加。
 */
fs.appendFile('./read.txt', 'Hi Apirl' , function (err) {
    if(err) throw err;
});

/**
 * fs.unlink(path, callback)#

 path <string> | <Buffer> | <URL>
 callback <Function>

 err <Error>
 异步地删除文件或符号链接。 除了可能的异常，完成回调没有其他参数。
 */
fs.unlink('./testtt.txt', function (err) {
    if(err) throw err;
});

/**
 * fs.readdir(path[, options], callback)#
 path <string> | <Buffer> | <URL>
 options <string> | <Object>

 encoding <string> 默认值: 'utf8'。
 withFileTypes <boolean> 默认值: false。
 callback <Function>

 err <Error>
 files <string[]> | <Buffer[]> | <fs.Dirent[]>
 异步的 readdir(3)。 读取目录的内容。 回调有两个参数 (err, files)，其中 files 是目录中的文件名的数组（不包括 '.' 和 '..'）。

 可选的 options 参数可以是指定编码的字符串，也可以是具有 encoding 属性的对象，该属性指定用于传给回调的文件名的字符编码。 如果 encoding 设置为 'buffer'，则返回的文件名是 Buffer 对象。

 如果 options.withFileTypes 设置为 true，则 files 数组将包含 fs.Dirent 对象。
 */
fs.readdir('../routes', function (err, files) {
    if(err) throw err;
    console.log(files);

});
