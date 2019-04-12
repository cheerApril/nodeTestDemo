//https://blog.csdn.net/tomcat_baby/article/details/52787679 粘滞会话(Sticky Sessions) 均衡加载的情况下,保持一个回话(session)对应同样的一个服务器

/**
 * 整理了一些thinkJs使用的模块的用法
 * assert
 * path
 * fs
 * process (全局变量) pid --进程ID
 * cluster
 * net
 * events  eventEmitter.on() 用于注册监听器， eventEmitter.emit() 用于触发事件。
 * const myEmitter = new MyEmitter();
    myEmitter.on('event', () => {
        console.log('触发事件');
    });
    myEmitter.emit('event');
    使用 eventEmitter.once() 可以注册最多可调用一次的监听器。 当事件被触发时，监听器会被注销，然后再调用。
 * os
 *
 * index++ 先判断后相加 ++index 先相加后判断
 */
const assest = require('assert');

const options = {
    isUser:  true
};
//检查是否为真的输入。
assest(options.isUser, `isUser must be set`);

//path.join([...paths]) 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。
const path = require(`path`);
console.log(path.join('testDemo', 'demo', 'thinkjsUse'));

//think-helper -- isDirectory -- isExist
/**
 * path.normalize() 方法规范化给定的 path，解析 '..' 和 '.' 片段。

 当找到多个连续的路径段分隔字符时（例如 POSIX 上的 /、Windows 上的 \ 或 /），则它们将被替换为单个平台特定的路径段分隔符（POSIX 上的 /、Windows 上的 \）。 尾部的分隔符会保留。

 如果 path 是零长度的字符串，则返回 '.'，表示当前工作目录。
 */
path.normalize(path); //就是路径规范化
path.sep; //提供平台特定的路径片段分隔符：// Windows 上是 \。 // POSIX 上是 /。
path.extname(path); //path.extname() 方法返回 path 的扩展名，从最后一次出现 .（句点）字符到 path 最后一部分的字符串结束。 如果在 path
// 的最后一部分中没有 . ，或者如 果 path 的基本名称（参阅 path.basename()）的第一个字符是 .，则返回空字符串。
path.isAbsolute(path) //path.isAbsolute() 方法检测 path 是否为绝对路径。


const fs = require('fs');
/**
 * 同步地测试用户对 path 指定的文件或目录的权限。 mode 参数是一个可选的整数，指定要执行的可访问性检查。 mode 可选的值参阅文件可访问性的常量。 可以创建由两个或更多个值按位或组成的掩码（例如 fs.constants.W_OK | fs.constants.R_OK）。

 如果可访问性检查失败，则抛出 Error。 否则，该方法将返回 undefined。

 fs.accessSync(path[, mode])

 mode: F_OK 表明文件调用进程可见.这对于判断文件是否存在很有用,但对RWX权限没有任何说明,如果未指定模式,则默认值为该值.
 R_OK 表明调用进程可以读取文件
 W_OK 可以写入文件
 X_OK 可以执行文件
 */

fs.accessSync(path, fs.constants.F_OK);
fs.existsSync(dir);  //判断路径是否存在
fs.readdirSync();  //同步读取文件
fs.statSync(); //检查文件是否存在 //
fs.unlinkSync(); //删除文件
/**
 * thinkJs使用到的第三方库
 * ava https://github.com/avajs/ava-docs/blob/master/zh_CN/readme.md 测试框架 据说性能 > mocha
 * mock-require 自定义require
 * mkdirp 创建目录
 * rimraf 删除文件
 * ms Use this package to easily convert various time formats to milliseconds. Usage(用例): ms('2 days')  // 172800000
 * string-hash
 * log4js
 */


/**
 *  Js 相关的方法
 *  --------------------------------------------------
 *  STRING: string:
 *  slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
 *  indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
 *  replace replace() 方法用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
 *  test() 方法用于检测一个字符串是否匹配某个模式.
 *
 *  --------------------------------------------------
 *  Array
 *  array.filter((x) =>{})
 *  unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
 *  ------------------------------------------------------
 *  Object
 *  Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
 *
 */

/**
 * ES5 的对象属性名都是字符串，这容易造成属性名的冲突。
 * 比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，
 * 保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入Symbol的原因。
 *
 * Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的
 */
