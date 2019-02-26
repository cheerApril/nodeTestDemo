/**
 * Node.js 默认单进程运行，对于多核 CPU 的计算机来说，这样做效率很低，因为只有一个核在运行，其他核都在闲置，
 * 面对单进程单线程对多核使用不足的问题，
 * 前人的经验是启动多进程。理想的状态下每个进程各自利用一个 CPU ，以此实现多核 CPU 的利用

 Master-Worker模式：
 Cluster 模块允许设立一个主进程和若干个 worker 进程，由主进程监控和协调 worker 进程的运行，
 worker 之间采用进程间通信交换信息，cluster 模块内置一个负载均衡器，协调各个进程之间的负载。
 这是典型的分布式架构中用于并行处理业务的模式，具备较好的可伸缩性和稳定性。
 主进程不负责具体的业务处理，而是负责调度或管理工作进程，他是趋向于稳定为。工作进程负责具体的业务处理。

 通过 fork() 复制的进程都是一个独立的进程，这个进程中有着独立的 V8 实例。 fork() 进程是昂贵的。
 Node 通过事件驱动的方式在单线程上解决了大并发的问题，启动多个进程只是为了充分将 CPU 资源利用起来，而不是为了解决并发问题
 ---------------------
 作者：mjzhang1993
 来源：CSDN
 原文：https://blog.csdn.net/mjzhang1993/article/details/78626316
 版权声明：本文为博主原创文章，转载请附上博文链接！
 */

const cluster = require('cluster');
const os = require('os'); //获取当前操作系统CPU的总数
//创建多个worker, master线程管理相关的数据

// 判断当前进程是否主线程
if(cluster.isMaster){
    for(let i = 0 ; i < os.cpus().length; i++){
        cluster.fork();
    }

    // console.log(cluster.workers); // 获取生成的worker的进程(主线程调用)

    // cluster.on('fork', function (worker) {
    //     console.log("fork = " + worker.id)
    // });
    //
    cluster.on('message', function (worker, message, handle) {
        console.log(` Master get ${worker.id} message: ${message}`);
        worker.send("hello, cheer");
        if(message = 1){
            worker.kill();
        }
    });
}else if(cluster.isWorker){
    const worker = cluster.worker;//获取当前子线程worker(子线程调用)
    
    worker.on('message', function (msg) {
        console.log(`worker  get Message ${msg}`);
        worker.send(1);
    });

    worker.on('exit ', function (code, singal) {
        console.log(`worker :${worker.id}, ${code}`)
    });

    worker.send('hello cheer');
}