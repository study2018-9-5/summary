/* 
  this绑定的五种场景：
    1.默认绑定：默认绑定时this指向全局对象window(非严格模式)，严格模式下为undefined。
    2.隐式绑定：如果函数调用时，前面存在调用它的对象，那么this就会隐式绑定到这个对象上(多层则指向最近的)。
    3.显式绑定：显式绑定是指我们通过call、apply以及bind方法改变this的行为。
    4.new绑定：构造调用创建了一个新对象echo，而在函数体内，this将指向新对象echo上
    5.箭头函数绑定：箭头函数中没有this，箭头函数的this指向取决于外层作用域中的this，
                   外层作用域或函数的this指向谁，箭头函数中的this便指向谁。
    ----------------------------------------------------------------------------------------------------------
    3.1)call、apply与bind都用于改变this绑定，但call、apply在改变this指向的同时还会执行函数，
        而bind在改变this后是返回一个全新的boundFunction绑定函数不会执行。
    3.2)bind属于硬绑定，返回的boundFunction的this指向无法再次通过bind、apply或call修改，
        call与apply的绑定只适用当前调用，调用完就没了，下次要用还得再次绑。
    3.3)call与apply功能完全相同，唯一不同的是call方法传递函数调用形参是以散列形式，而apply方法的形参是一个数组。
        在传参的情况下，call的性能要高于apply，因为apply在执行时还要多一步解析数组。
    ----------------------------------------------------------------------------------------------------------
    5.1)一旦箭头函数的this绑定成功，也无法被再次修改。
        当然，箭头函数的this也不是真的无法修改，我们知道箭头函数的this就像作用域继承一样从上层作用域找，
        因此我们可以修改外层函数this指向达到间接修改箭头函数this的目的。
    
*/

// 1.
function f1() {
  console.log("f1", this)  // window
}
// f1()

// 2.
let obj = {
  name: 'f2',
  func: function fn() {
    console.log(this)  // obj
  }
};
obj.func()

// 3.
let obj1 = {
  name: 'obj1'
};
let obj2 = {
  name: 'obj2'
};
var name = '全局';

function fn() {
  console.log(this.name);
};
fn.call(obj1);  //obj1
fn(); //全局
fn.apply(obj2); //obj2
fn(); //全局
let boundFn = fn.bind(obj1); //obj1
boundFn.call(obj2);  //obj1
boundFn.apply(obj2); //obj1

// 4.
function f4(){
  this.name = 'f4'
};
let echo = new f4();
console.log("echo.name", echo.name) //f4

// 5.
function f5() {
  return () => {
      console.log(this.name);
  };
}
let obj3 = {
  name: 'obj3'
};
let obj4 = {
  name: 'obj4'
};
// let bar = f5.call(obj3); // f5 this指向obj3
// bar.call(obj4); //obj3

f5.call(obj1)()
f5.call(obj4)()