/* 
  赋值：对象之间赋值本质上是对象之间的*引用传递*而已，也就是多个对象指向同一个数据空间。
  浅拷贝：是对一个对象的顶层数据的拷贝。
  深拷贝：是对于一个对象所有层次的拷贝(递归)。
  ----------------------------------------------------------------------------------
  赋值与拷贝的区别：赋值是引用的改变，而拷贝是重新开辟一片空间。
  深拷贝与浅拷贝的区别：浅拷贝只是拷贝最外层数据，而深拷贝是递归拷贝所有层数据。
*/

// 浅拷贝可以用 Object.assign()、展开运算符(...)
// 浅拷贝只能解决第一层的问题，但是如果接下来的值还有对象的话就不可以了。
let obj1 = {
  name: '小明1'
};
let CObj1 = Object.assign({}, obj1);
obj1.name = '小红1';
console.log(CObj1.name)  // 小明1


let obj2 = {
  name: '小明2'
};
let CObj2 = {...obj2};
obj2.name = '小红2';
console.log(CObj2.name)  // 小明2


let obj3 = {
  name: '小明3',
  jobs: {
    first: 'web'
  }
}
let CObj3 = {...obj3};
obj3.jobs.first = 'JS';
console.log(CObj3.jobs.first)  // JS


/* 
  深拷贝可以用JSON.parse(JSON.stringify(object))该方法是有局限性的。
    1.会忽略undefined、symbol
    2.不能序列化函数
    3.不能解决循环引用的对象
*/
let obj4 = {
  name: '小明4',
  jobs: {
    first: 'web'
  }
}
let CObj4 = JSON.parse(JSON.stringify(obj4));
obj4.jobs.first = 'JS';
console.log(CObj4.jobs.first)  // web

// 缺陷
let obj5 = {
  name: '小明5',
  age: undefined,
  sex: Symbol('male'),
  jobs: function () {
    return 'web'
  }
}
let CObj5 = JSON.parse(JSON.stringify(obj5));
console.log(CObj5)  // { name: '小明5' }


// 注：还有两种方式lodash的深拷贝函数、MessageChannel。
