/**
 * 来自于Node的中文官网的内容: http://nodejs.cn/api/child_process.html
 *为方便起见， child_process 模块提供了 child_process.spawn() 和 child_process.spawnSync() 的一些同步和异步的替代方法。
 * 注意，这些替代方法中的每一个都是基于 child_process.spawn() 或 child_process.spawnSync() 实现的。
    child_process.exec(): 衍生一个 shell 并在该 shell 中运行命令，当完成时则将 stdout 和 stderr 传给回调函数。
    child_process.execFile(): 类似于 child_process.exec()，除了它默认会直接衍生命令且不首先衍生 shell。
    child_process.fork(): 衍生一个新的 Node.js 进程，并通过建立 IPC 通信通道来调用指定的模块，该通道允许在父进程与子进程之间发送消息。
    child_process.execSync(): child_process.exec() 的同步版本，会阻塞 Node.js 事件循环。
    child_process.execFileSync(): child_process.execFile() 的同步版本，会阻塞 Node.js 事件循环。
 对于某些用例，例如自动化的 shell 脚本，同步的方法可能更方便。 但是在大多数情况下，同步的方法会对性能产生重大影响，因为它会停止事件循环直到衍生的进程完成。
 */

const childProcess = require('child_process');
/**
 * child_process.exec(command[, options][, callback])#
     command <string> 要运行的命令，并带上以空格分隔的参数。
    options <Object>
         cwd <string> 子进程的当前工作目录。默认值: null。
         env <Object> 环境变量的键值对。默认值: null。
         encoding <string> 默认值: 'utf8'。
         shell <string> 用于执行命令的 shell。参阅 shell 的要求与 Windows 默认的 shell。 默认值: UNIX 上是 '/bin/sh'，Windows 上是 process.env.ComSpec。
         timeout <number> 默认值: 0。
         maxBuffer <number> stdout 或 stderr 上允许的最大字节数。如果超过限制，则子进程将终止。参阅 maxBuffer 与 Unicode。默认值: 200 * 1024。
         killSignal <string> | <integer> 默认值: 'SIGTERM'。
         uid <number> 设置进程的用户标识，参阅 setuid(2)。
         gid <number> 设置进程的群组标识，参阅 setgid(2)。
         windowsHide <boolean> 隐藏通常在 Windows 系统上创建的子进程的控制台窗口。默认值: false。
         callback <Function> 当进程终止时调用。

    error <Error>
    stdout <string> | <Buffer>
    stderr <string> | <Buffer>
     返回: <ChildProcess>
 */

// childProcess.exec('node ../test.js', function (err, stdout, stderr) {
//     // 输出
//     // err null
//     // stdout
//     // stderr
//     console.log("err", err);
//     console.log("stdout", stdout);
//     console.log("stderr", stderr);
// });

/**
 * child_process.execFile(file[, args][, options][, callback])#
 file <string> 要运行的可执行文件的名称或路径。
    args <string[]> 字符串参数的列表。
    options 同上
    error 同上
 */
// childProcess.execFile('node', ['../test.js'], function (err, stdout, stderr) {
//      console.log("err", err);
//     console.log("stdout", stdout);
//     console.log("stderr", stderr);
// });

/**
 * child_process.fork(modulePath[, args][, options])#
    modulePath <string> 要在子进程中运行的模块。
    args <string[]> 字符串参数的列表。
    options <Object>
    返回: <ChildProcess>
    child_process.fork() 方法是 child_process.spawn() 的一个特例，专门用于衍生新的 Node.js 进程。 与 child_process.spawn()
 一样返回 ChildProcess 对象。 返回的 ChildProcess 将内置一个额外的通信通道，允许消息在父进程和子进程之间来回传递。

 注意，衍生的 Node.js 子进程独立于父进程，但两者之间建立的 IPC 通信通道除外。 每个进程都有自己的内存，带有自己的 V8 实例。
 由于需要额外的资源分配，因此不建议衍生大量子 Node.js 进程。
 */
const childP = childProcess.fork('../test.js');
//事件，父、子进程间通信，接受信息用
childP.on('message', function (n) {
    console.log("child process pid", childP.pid);
    console.log('get data: ', n);
    childP.kill();
});
//事件，当子进程的 ‘stdio’ 流被关闭时触发
childP.on('close', function (code, signal) {
    console.log('close, de2', code);
    console.log('close ', signal);
});
//exit 事件， 子进程结束后会触发，回调参数 code：退出码；signal: 被终止时的信号
childP.on('exit', function (code, signal) {
    console.log('close, de1', code);
    console.log('close ', signal);
});

//在父进程中 subprocess.disconnect() 或者在子进程中调用 process.disconnect() 都会触发，断开后将关闭 IPC 通道，不能再发送或者接受消息
childP.on('disconnect', function () {
    console.log('disconnect, ', childP.connected);
    console.log('killed ', childP.killed);
});
childP.send(1);

//输出
// welcome, test.js
// cheer,收到了n
// child process pid 4328
// get data:  2
// disconnect,  false
// killed  true
// close, de1 null
// close  SIGTERM
// close, de2 null
// close  SIGTERM