/* 
  arguments可以获得调用者传入的所有参数，常用于判断传入参数的个数。
*/
function abc() {
  console.log("abc -> arguments.length", arguments.length)  // 0
}
abc();

// rest多余的参数以数组的方式交给变量rest
function ABC(a, ...rest) {
  console.log("ABC -> rest", rest)
}
ABC(1, 2, 3);

/* 
  全局变量会绑定的window上，不同的JavaScript文件如果使用了相同的全局变量，
  或者定义了相同的名字的顶层函数，都会造成命名冲突。
  减少冲突的方法是把自己的所有变量和函数绑定到全局变量中。
  var alone = {}
*/
// let、const都具有块级作用域，let定义变量，const定义常量。

//-------------------------------------------------------------------------------//

// 在一个对象中绑定函数，称为这个对象的方法。
var person = {
  name: '小明',
  birth: 1995,
  age: function () {
    var year = new Date().getFullYear();
    return year - this.birth;
  }
};
console.log("person.age()", person.age())

/* 
  apply()、call()都可以改变this的指向。
  apply()：把参数打包成数组再传入。
  call()：把参数按顺序传入。
  对普通函数调用，我们通常把this绑定为null。
*/
console.log("Math.max.apply(null, [5, 3, 4])", Math.max.apply(null, [5, 3, 4]))
console.log("Math.max.call(null, 5, 3, 4)", Math.max.call(null, 5, 3, 4))

/* 
  要把一个函数作用在数组上，就可以用map()。
  返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
  高阶函数：接收一个函数作为参数。
*/
var arr = [1, 2, 3, 4, 5, 10];
function square(x) {
  return x * x;
}
console.log("arr.map(square)", arr.map(square))

/* 
  reduce()方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
*/
function sum(x, y) {
  return x + y;
}
console.log("arr.reduce(sum)", arr.reduce(sum))

/* 
  filter()用于把数组中的某些元素过滤掉，筛选出符合条件的。
*/
function is3(x) {
  return x > 3;
}
console.log("arr.filter(is3)", arr.filter(is3))

/* 
  sort()对数组进行排序。
  把所有的元素转换成String在排序(默认的排序方法)，所以直接对数字排序会出现问题的。
  注：会直接对原数组进行修改。
*/
console.log("arr.sort()", arr.sort(), arr)
function paiXu(x, y) {
  return x - y;
}
console.log("arr.sort(paiXu)", arr.sort(paiXu))

// 注：函数名和变量不建议使用拼音。