/**
 ES10 保存下来方便自己日后查看
 from: https://cnodejs.org/topic/5c75f39cab86b86ddf6b32a5
 **/
/**
 * @type {BigInt}
 //  */
const test = 10n;
console.log(typeof(test)); // bigint
console.log(test === BigInt(10)); // true
console.log(test == 10);       // true
console.log(test / 10n);       // 1n
console.log(test / 10); //Cannot mix BigInt and other types, use explicit conversions 数字运算符只能在自己的类型工作

/**
 * string.prototype.matchAll
 */

// .matchAll() 是如何工作的?
// 让我们尝试匹配单词 hello 中字母 e 和 l 的所有实例， 因为返回了迭代器，所以可以使用 for…of 循环遍历它：
// Match all occurrences of the letters: "e" or "l"
let iterator = "hello".matchAll(/[el]/);
for (const match of iterator)
    console.log(match);

/**
 * 动态导入
 * @returns {Promise<void>}
 */

const hello = async function () {
    const user = await import('./test.js');
    user.hello();
};


/**
 *  扁平化多维数组
 * @type {Array}
 */
const test2 = [1,2,3,[1,2,3],[1,2,3,[1,2,3],[1,2,3]]];
console.log(test2.flat()); // [1,2,3,4,5,6,Array(4)]
console.log(test2.flat().flat()); // [1,2,3,4,5,6,7,8,9,Array(3)]
console.log(test2.flat().flat()); // [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(test2.flat(Infinity));// [1,2,3,4,5,6,7,8,9,10,11,12]


const test = new Array(1,2,35,6);
test[0] = 2;
const test = test;

/**
 * Array.flatMap()
 * 数组里面的 value 做运算操作 得到新的数组
 */

const array = [1,2,3,4,5];

array.flatMap(v => [v, v * 2]);
[1, 2, 2, 4, 3, 6, 4, 8, 5, 10]

/**
 * 将键值对列表转换为对象:
 * @type {{apple: number, orange: number, banana: number}}
 */
let obj = { apple : 10, orange : 20, banana : 30 };
let entries = Object.entries(obj);
// entries;
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ["apple", 10]
// 1: (2) ["orange", 20]
// 2: (2) ["banana", 30]
let fromEntries = Object.fromEntries(entries);
// { apple: 10, orange: 20, banana: 30 }

/**
 * 去掉字符串前面空白  还有 去掉字符串上面空白
 * String.trimStart() 与 String.trimEnd()
 */
let greeting = "     Space around     ";
greeting.trimEnd();   // "     Space around";
greeting.trimStart(); // "Space around     ";

/**
 * 1.格式良好的 JSON.stringify()
 2.稳定的 Array.prototype.sort()
    V8 之前的实现对包含10个以上项的数组使用了一种不稳定的快速排序算法。
    一个稳定的排序算法是当两个键值相等的对象在排序后的输出中出现的顺序与在未排序的输入中出现的顺序相同时。
 3.ES10类: private、static 和 公共成员
 **/
