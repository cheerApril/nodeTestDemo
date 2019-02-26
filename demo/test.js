/**
 * 摘自: http://www.cnblogs.com/libin-1/p/5947602.html
 * @type {bluebird}
 */
const promise = require('bluebird');
//简单的Promise demo
new Promise(function (resolve,reject) {
    console.log("promise");
    reject("test1");
}).then(function (result) {
    console.log(result)
}).catch(function (e) {
    throw e;
});

//Promise.all的简单使用
const function1 = () => {
    return new Promise(function (resolve, reject) {
        resolve("function1 被调用了");
    })
};

const function2 = () => {
    return new Promise(function (resolve, reject) {
        resolve("function2 被调用了");
    })
};

const function3 = () => {
    return new Promise(function (resolve, reject) {
        resolve("function3 被调用了");
    })
};

function1().then(function(result1){
    console.log(result1);
    return function2();
}).then(function (result2) {
    console.log(result2);
    return function3();
}).then(function (result3) {
    console.log(result3);
}).catch(function (e) {
    throw e;
});


// Promise.all的使用
/**
 * 用Promise.all来执行，all接收一个数组参数，里面的值最终都算返回Promise对象。这样，三个异步操作的并行执行的，等到它们都执行完后才会进到then里面。
 * 那么，三个异步操作返回的数据哪里去了呢？都在then里面呢，
 * all会把所有异步操作的结果放进一个数组中传给then，就是上面的results
 */
Promise.all([function1(), function2(), function3()]).then(function (data) {
    console.log(data)
}).catch(function (e) {
    throw(e);
});