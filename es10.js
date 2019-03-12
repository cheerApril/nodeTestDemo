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