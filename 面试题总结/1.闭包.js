/* 
  什么是闭包?
  我的理解是：函数A返回一个函数B，并且函数B中使用了函数A的变量，函数B就被称为闭包。
             闭包简单理解成"定义在一个函数内部的函数"。
  闭包的特性：
    1.函数内再嵌套函数
    2.内部函数可以引用外层的参数和变量
    3.参数和变量不会被垃圾回收机制回收

  由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，
  否则会造成网页的性能问题，在IE中可能导致内存泄露。
  解决方法是，在退出函数之前，将不使用的局部变量全部删除。
  ----------------------------------------------------------------------------
  声明一个函数，并马上调用这个匿名函数就叫做立即执行函数。
  立即执行函数使用场景：
    1.你的代码在页面加载完成之后，不得不执行一些设置工作，比如时间处理器，创建对象等等。
    2.所有的这些工作只需要执行一次，比如只需要显示一个时间。
    3.但是这些代码也需要一些临时的变量，但是初始化过程结束之后，就再也不会被用到，
      如果将这些变量作为全局变量，不是一个好的注意，
      我们可以用立即执行函数——去将我们所有的代码包裹在它的局部作用域中，不会让任何变量泄露成全局变量。
*/
function f1() {
  var count = 0;
  function f2(params) {
    return count += 1
  }
  return f2
}

var F1 = f1();
console.log("F1()", F1()) // 1
console.log("F1()", F1()) // 2


// for(var i=0; i<5; i++){
//   setTimeout(function () {
//     console.log(i);
//   }, i*1000)
// }


// 此时i为立即执行函数的参数 
for(var i=0; i<5; i++){
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, j*1000)
  })(i)
}
