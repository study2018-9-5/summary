/*
  面向对象有两个基本概念：类和实例，是大多数面向对象编程语言的基本概念(JS除外)。
  类：类是一种模板，
    例如：定义Student类来表示学生，Student表示学生类型但不表示某个学生。
  实例：根据类创建的对象，
    例如：根据Student类可以创建出xiaoming、xiaohong等多个实例。
  JavaScript不区分类和实例的概念，而是通过原型(prototype)来实现面向对象编程的。
*/
var Student = {
  name: 'student',
  age: 20,
  run: function () {
    console.log(this.name + 'is running....')
  }
};

var xiaoming = {
  name: '小明'
};

// 将xiaoming的原型指向Student对象。
xiaoming.__proto__ = Student;


// 创建对象：var arr = [1, 2, 3];
// 其原型链是：arr --> Array.prototype --> Object.prototype --> null
// 也可以用构造函数的方法:
function Student_1(name) {
  this.name = name;
  this.hello = function () {
    console.log('Hello' + this.name + '!');
  }
}
/* 
  这是一个普通的函数，但是在JS中可以用new这个关键字来调用这个函数，并返回一个对象。
  注：new的时候做了三件事：
    1.创建一个空对象，将他引用赋值给this。
    2.通过this将属性和方法添加到这个对象。
    3.最后返回this指向新对象。
  例如：function Student_1(name) {
    // var this = {};  这些都是隐性的
    this.name = name;
    this.hello = function () {
      console.log('Hello' + this.name + '!');
    };
    // return this   这些都是隐性的
  }
*/
var xiaohong = new Student_1('小红');
console.log("xiaohong.name", xiaohong.name)

// 用new创建的对象从原型上获得了一个constructor属性，它指向函数Student本身。
// xiaohong.constructor === Student_1.prototype.constructor
// Student_1.prototype.constructor === Student_1
console.log("xiaohong.constructor === Student_1", xiaohong.constructor === Student_1)  // true

// 要让创建的对象共享一个hello函数，
// 我们只要把hello函数移动到xiaoming、xiaohong这些对象共同原型上就可以了，
// 也就是Student_1.prototype。
// function Student_1(name) {
//   this.name = name;
// }
// Student_1.prototype.hello = function () {
//   console.log('Hello' + this.name + '!');
// }


// 我们还可以编写一个createStudent()函数，这样我们可以不需要new来调用，
// 参数灵活，可以传也可以不传。
function Student_2(props) {
  this.name = props.name || '匿名',
  this.age = props.age || 20
}
Student_2.prototype.hello = function () {
  console.log('Hello' + this.name + '!')
};
function createStudent(props) {
  return new Student_2(props || {})
}
var xiaoqiang = createStudent({
  name: '小强'
});
xiaoqiang.hello();


/* 
  笔记：new对象中函数的用法
*/
var obj = {
  person1: function(){
    console.log('person1')
  },
  person2: function(){
    console.log('person2')
  }
};
var P1 = new obj['person1']();

// https://baijiahao.baidu.com/s?id=1626333751993181194&wfr=spider&for=pc