/**
 * Buffer 类的实例类似于整数数组，但 Buffer 的大小是固定的、且在 V8 堆外分配物理内存。 Buffer 的大小在创建时确定，且无法改变。
 * 来自于Node的中文官网的内容: http://nodejs.cn/api/buffer.html
 * */

const buffer = require('buffer');
const maxBufferLength = buffer.constants.MAX_LENGTH; //单个 Buffer 实例允许的最大内存
const maxStringLength = buffer.constants.MAX_STRING_LENGTH; //单个 string 实例允许的最大长度。
const Buffer = buffer.Buffer;

/**
 * Buffer.alloc(size[, fill[, encoding]])#
    size <integer> 新建的 Buffer 的长度。
    fill <string> | <Buffer> | <integer> 预填充 Buffer 的值。默认为 0。
    encoding <string> 如果 fill 是字符串，则指定 fill 的字符编码。默认为 'utf8'。
 如果 size 大于 buffer.constants.MAX_LENGTH 或小于 0，则抛出 ERR_INVALID_OPT_VALUE。 如果 size 为 0，则创建一个长度为 0 的 Buffer。
 */
const buffer1 = Buffer.alloc(10);

/**
 * Buffer.allocUnsafe(size)#
     size <integer> 新建的 Buffer 的长度。(跟alloc同样的长度限制)
  △以这种方式创建的 Buffer 的内存是未初始化的。 Buffer 的内容是未知的，可能包含敏感数据。△
 */

const buffer2 = Buffer.allocUnsafe(100);

/**
 * Buffer.allocUnsafeSlow(size)#
    size <integer> 新建的 Buffer 的长度。
 当使用 Buffer.allocUnsafe() 创建 Buffer 时，如果要分配的内存小于 4KB，则会从一个预分配的 Buffer 切割出来。 这可以避免垃圾回收机制因创建太多独立的 Buffer 而过度使用。
 当需要在内存池保留一小块内存时，可以使用 Buffer.allocUnsafeSlow() 创建一个非内存池的 Buffer 并拷贝出来。
 */
const buffer3 = Buffer.allocUnsafeSlow(10);

/**
 * Buffer.byteLength(string[, encoding])#
    string <string> | <Buffer> | <TypedArray> | <DataView> | <ArrayBuffer> | <SharedArrayBuffer> 要计算长度的值。
    encoding <string> 如果 string 是字符串，则指定 string 的字符编码。默认为 'utf8'。
    返回: <integer> string 的字节数。
 */

const length = Buffer.byteLength(buffer3);

/**
 * Buffer.from(array)#
    array <integer[]>
 使用字节数组 array 创建 Buffer。
 */
const buffer4 = new Buffer([1,23,4]);

/**
 * Buffer.from(arrayBuffer[, byteOffset[, length]])#
    arrayBuffer <ArrayBuffer> | <SharedArrayBuffer> ArrayBuffer 或 SharedArrayBuffer，或 TypedArray 的 .buffer 属性。
    byteOffset <integer> 开始拷贝的索引。默认为 0。
    length <integer> 拷贝的字节数。默认为 arrayBuffer.length - byteOffset。
 创建 ArrayBuffer 的视图，但不会拷贝底层内存。 例如，当传入 TypedArray 的 .buffer 属性的引用时，新建的 Buffer 会与 TypedArray 共享同一内存。
 */
const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

// 与 `arr` 共享内存。
const buffer5 = Buffer.from(arr.buffer);

console.log(buffer5);
// 输出: <Buffer 88 13 a0 0f>

// 改变原先的 Uint16Array 也会改变 Buffer。
arr[1] = 6000;

console.log(buffer5);
// 输出: <Buffer 88 13 70 17>

/**
 * Buffer.from(string[, encoding])#
    string <string> 要编码的字符串。
    encoding <string> string 的字符编码。默认为 'utf8'。
 */

const buffer6 = Buffer.from('hello, cheer');
// console.log(buffer6);

/**
 * Buffer.isBuffer(obj)#
    obj <Object>
    返回: <boolean>
 如果 obj 是一个 Buffer，则返回 true，否则返回 false。
 */
console.log(Buffer.isBuffer(buffer6));

/**
 * Buffer.isEncoding(encoding)#
    encoding <string> 要检查的字符编码名称。
         Node.js 支持的字符编码有：
         'ascii' - 仅支持 7 位 ASCII 数据。
         'utf8' - 多字节编码的 Unicode 字符。
         'utf16le' - 2 或 4 个字节，小端序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
         'ucs2' - 'utf16le' 的别名。
         'base64' - Base64 编码。
         'latin1' - 将 Buffer 编码成单字节编码的字符串。
         'binary' - 'latin1' 的别名。
         'hex' - 将每个字节编码成两个十六进制字符。
    返回: <boolean>
 如果 encoding 是支持的字符编码，则返回 true，否则返回 false。
 */
console.log(Buffer.isEncoding('utf8'));

/**
 * buf.entries()#
     返回: <Iterator>
 用 buf 的内容创建并返回一个 [index, byte] 形式的迭代器。
 */
for(let value of buffer6.entries()){
    console.log(value);
}
//输出
//     [ 0, 104 ]
//     [ 1, 101 ]
//     [ 2, 108 ]
//     [ 3, 108 ]
//     [ 4, 111 ]
//     [ 5, 44 ]
//     [ 6, 32 ]
//     [ 7, 99 ]
//     [ 8, 104 ]
//     [ 9, 101 ]
//     [ 10, 101 ]
//     [ 11, 114 ]
