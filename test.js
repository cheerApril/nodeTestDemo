//
// let Person = {
//     name: "cheer",
//     age: 1
// };
//
// const person = Object.create(Person);
// console.log(person.name);

function Person(){
    this.name = 'cheer';
    this.age = 11;
}

Person.prototype.sayName = function () {
    console.log(`你好,我是${this.name}`);
};

const person = new Person();
module.exports = person;

console.log("welcome, test.js");
/**
 * 注意这里因为是Node.js 实例 所以可以用process的传递方法跟父进程交互
 */
process.on('message', function (n) {
    console.log(`${person.name},收到了n`);
    process.send(2);
});

