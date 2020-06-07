/*
  ES6之前声明变量只有var、function，
  ES6新增4种声明变量方式：let、const、import、class。
  let声明变量，const声明常量。
*/

/* 
  ES6新增了一种字符串的表示方式：反引号(`)包裹，用${}添加变量。
  Number.EPSILON表示小数运算时的误差范围。
*/
console.log(0.1 + 0.2)  // 0.30000000000000004
console.log("0.1 + 0.2 - 0.3 < Number.EPSILON", 0.1 + 0.2 - 0.3 < Number.EPSILON)

/* 
  ES6引入了一种新的原始数据类型Symbol，表示独一无二的值，最大的用法是用来定义对象的唯一属性名。
  创建symbol：let sy = Symbol("KK");
*/

// 对象的新方法：Object.assign(target, source_1, ···)，第一个参数是目标对象，后面的参数是源对象。
// 如果目标对象和源对象有同名属性，或者多个源对象有同名属性，则后面的属性会覆盖前面的属性。
// assign 的属性拷贝是浅拷贝。
let target = {a: 1};
let obj1 = {b: 2};
let obj2 = {c: 3};
let obj3 = {c: 4};
Object.assign(target, obj1, obj2, obj3)
console.log("target", target)

// https://es6.ruanyifeng.com/