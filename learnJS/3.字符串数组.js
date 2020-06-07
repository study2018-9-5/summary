/* 
  字符串中的转移字符为 '\'

  字符串类型转换时用String()或者toString();
  注：null和undefined是没有toString()方法的。
  数字要想转换的话要用下面两种方式。
  
  字符串提供了一些常用的方法，调用这些方法不会改变本身的字符串，而是返回一个新的。
  toUpperCase、toLowerCase、indexOf、substring
*/
console.log('I\'m \"OK\"!')

console.log("123..toString()", 123..toString())
console.log("(123).toString()", (123).toString())

var str = 'hello';
var STR = 'HELLO';

console.log("str.toUpperCase()", str.toUpperCase())
console.log("STR.toLowerCase()", STR.toLowerCase())

// 找到返回索引，找不到返回-1。
console.log("str.indexOf('l')", str.indexOf('l'))  

// 一个参数截取到末尾，两个参数前包后不包。
console.log("str.substring(0, 3)", str.substring(0, 3))


/* 
  Array数组可以包含任意类型的数据，并通过索引来访问每一个元素。
  在编写代码时不建议直接修改数组的大小，和越界访问索引。
  判断Array要使用Array.isArray()
*/
var arr = ['a', 'b', 'c', 'd'];
console.log("Array.isArray(arr)", Array.isArray(arr))

// 找到返回索引，找不到返回-1
console.log("arr.indexOf('a')", arr.indexOf('a'))

// 没有参数相当于复制一个新的数组，一个参数截取到末尾，两个参数前包后不包。
// 注：复制出来的数组与原数组不相等 arr === arr.slice() 为false
console.log("arr.slice()", arr.slice())
console.log("arr.slice(0, 3)", arr.slice(0, 3))
console.log("arr === arr.slice()", arr === arr.slice())

/* 
  push()插入元素、pop()删除元素都在尾部操作。
  unshift()插入元素、shift()删除元素都在头部操作。
  concat、join
*/
var ARR =  ['a', 'b', 'c', 'd'];
console.log("ARR.push()", ARR.push('e'), ARR)  // 返回新的长度
console.log("ARR.pop()", ARR.pop(), ARR)

console.log("ARR.unshift()", ARR.unshift('A'))
console.log("ARR.shift()", ARR.shift())

console.log("ARR.reverse()", ARR.reverse())  // 反转
console.log("ARR.sort()", ARR.sort())  // 排序

console.log("ARR.splice()", ARR.splice(2,1))