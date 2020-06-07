/*
  问题1.什么是构造函数?
    答：所谓"构造函数"，其实就是一个普通函数，但是内部使用了this变量。
  ***************************************************************************************** 
  ------------------------------------------------------------------------------------------
  JS它没有"子类"和"父类"的概念，也没有"类"（class）和"实例"（instance）的区分，
  全靠一种很奇特的"原型链"（prototype chain）模式，来实现继承。
  ------------------------------------------------------------------------------------------
  在Javascript语言中，new命令后面跟的不是类，而是构造函数。
  对构造函数使用new运算符，就能生成实例，并且this变量会绑定在实例对象上。
  -------------------------------------------------------------------
  function Person(name){    ====> 构造函数
    // this关键字，它就代表了新创建的实例对象
　　this.name = name;
　}
  
  // 改造
  // + Person.prototype = {run: '会跑'}

  // var 实例 = new 构造函数;
  var xiaoming = new Person('小明'); 
  
  // + xiaoming.run ==> 会跑
  -------------------------------------------------------------------
  用构造函数生成实例对象，有一个缺点，那就是无法共享属性和方法。
  考虑到这一点，Brendan Eich决定为构造函数设置一个prototype属性。
  -------------------------------------------------------------------
  这个属性包含一个对象（以下简称"prototype对象"），所有实例对象需要共享的属性和方法，
  都放在这个对象里面；那些不需要共享的属性和方法，就放在构造函数里面。
  -------------------------------------------------------------------
  实例对象一旦创建，将自动引用prototype对象的属性和方法。也就是说，
  实例对象的属性和方法，分成两种，一种是本地的，另一种是引用的。
  ------------------------------------------------------------------------------------------
*/
function Person(name){
　this.name = name;
}
Person.prototype = {run: '会跑'}
var xiaoming = new Person('小明'); 
console.log("xiaoming.run", xiaoming.run)

// 这时xiaoming会自动含有一个constructor属性，指向它们的构造函数(没有prototype时)。
console.log(xiaoming.constructor == Person)  // true


// isPrototypeOf()：这个方法用来判断，某个proptotype对象和某个实例之间的关系。
console.log(Person.prototype.isPrototypeOf(xiaoming)); //true

// 每个实例对象都有一个hasOwnProperty()方法，用来判断某一个属性到底是本地属性，还是继承自prototype对象的属性。
console.log(xiaoming.hasOwnProperty("name")); // true
console.log(xiaoming.hasOwnProperty("run"));  // false

// in运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。
console.log("name" in xiaoming); // true
console.log("run" in xiaoming);  // true

// in运算符还可以用来遍历某个对象的所有属性。
for(var prop in xiaoming) { 
  console.log("xiaoming["+prop+"]="+xiaoming[prop]); 
}


/* 
  对象之间的"继承"的五种方法：
  *构造函数绑定、使用prototype属性、直接继承prototype、*利用空对象作为中介、拷贝继承
*/
// 比如，现在有一个"动物"对象的构造函数。
function Animal(){
　this.species = "动物";
}
// 还有一个"猫"对象的构造函数。
// function Cat(name,color){
// 　this.name = name;
// 　this.color = color;
// }
// 怎样才能使"猫"继承"动物"呢？

// 1.构造函数绑定
// 第一种方法也是最简单的方法，使用call或apply方法，
// 将父对象的构造函数绑定在子对象上，即在子对象构造函数中加一行。
// arguments可以获得调用者传入的所有参数，常用于判断传入参数的个数。
function Cat(name,color){
　Animal.apply(this, arguments);
　this.name = name;
　this.color = color;
}
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species); // 动物
// ----------------------------------------------------------------------

// 2.使用prototype属性
// 如果"猫"的prototype对象，指向一个Animal的实例，那么所有"猫"的实例，就能继承Animal了。
function Cat(name,color) {
  Cat.prototype = new Animal();    // 我们将Cat的prototype对象指向一个Animal的实例。
  Cat.prototype.constructor = Cat; // 将Cat.prototype对象的constructor值改为Cat。**这是很重要的一点，编程时务必要遵守。
  this.name = name;
  this.color = color;
}
// 注：如果替换了prototype对象，o.prototype = {};
// 那么，下一步必然是为新的prototype对象加上constructor属性，
// 并将这个属性指回原来的构造函数。o.prototype.constructor = o;
// ----------------------------------------------------------------------

// 3.直接继承prototype：将Cat的prototype对象，然后指向Animal的prototype对象，这样就完成了继承。
// 与前一种方法相比，这样做的
// 优点是效率比较高（不用执行和建立Animal的实例了），比较省内存。
// 缺点是 Cat.prototype和Animal.prototype现在指向了同一个对象，那么任何对Cat.prototype的修改，都会反映到Animal.prototype。
// -----------------------------------------------------------------------

// 4.利用空对象作为中介
// 由于"直接继承prototype"存在上述的缺点，所以就有第四种方法，利用一个空对象作为中介。
// F是空对象，所以几乎不占内存。这时，修改Cat的prototype对象，就不会影响到Animal的prototype对象。
// Animal要修改一下
function Animal(){}
Animal.prototype.species = "动物";

function Cat(name,color) {
  var F = function(){};
  F.prototype = Animal.prototype;
  Cat.prototype = new F();
  Cat.prototype.constructor = Cat;
  this.name = name;
  this.color = color;
}

// 我们将上面的方法，封装成一个函数，便于使用。
function extend(Child, Parent) {
　var F = function(){};
　F.prototype = Parent.prototype;
　Child.prototype = new F();
　Child.prototype.constructor = Child;
　Child.uber = Parent.prototype;
}
// 最后一行意思是为子对象设一个uber属性，这个属性直接指向父对象的prototype属性。
// uber是一个德语词，意思是"向上"、"上一层"。这等于在子对象上打开一条通道，
// 可以直接调用父对象的方法。这一行放在这里，只是为了实现继承的完备性，纯属备用性质。

// 使用的时候，方法如下
extend(Cat,Animal);
var cat1 = new Cat("大毛","黄色");
alert(cat1.species); // 动物
// 这个extend函数，就是YUI库如何实现继承的方法。
// --------------------------------------------------------------------------------

// 5.拷贝继承
// 把父对象的所有属性和方法，拷贝进子对象。
// 首先，还是把Animal的所有不变属性，都放到它的prototype对象上。
function Animal(){}
Animal.prototype.species = "动物";

// 然后，再写一个函数，实现属性拷贝的目的。
function extend2(Child, Parent) {
　var p = Parent.prototype;
　var c = Child.prototype;
　for (var i in p) {  // 便利p的属性
　　c[i] = p[i];
　}
　c.uber = p;
}
// 这个函数的作用，就是将父对象的prototype对象中的属性，一一拷贝给Child对象的prototype对象。
// 使用的时候，方法如下
extend2(Cat, Animal);
var cat1 = new Cat("大毛","黄色");
alert(cat1.species); // 动物


/* 
  非构造函数的继承
  object()方法、浅拷贝、深拷贝
*/
// 比如，现在有一个对象，叫做"中国人"。
var Chinese = {
　nation:'中国'
};
// 还有一个对象，叫做"医生"。
var Doctor ={
　career:'医生'
}
// 怎样才能让"医生"去继承"中国人"，也就是说，我怎样才能生成一个"中国医生"的对象？
// 这里要注意，这两个对象都是普通对象，不是构造函数，无法使用构造函数方法实现"继承"。

// 1.object()方法
function object(o) {
　function F() {}
　F.prototype = o;
　return new F();
}
// 这个object()函数，其实只做一件事，就是把子对象的prototype属性，指向父对象，从而使得子对象与父对象连在一起。
// 使用的时候，第一步先在父对象的基础上，生成子对象：
var Doctor = object(Chinese);
// 然后，再加上子对象本身的属性：
Doctor.career = '医生';
// 这时，子对象已经继承了父对象的属性了。
console.log(Doctor.nation); //中国

// 2.浅拷贝
// 把父对象的属性，全部拷贝给子对象，也能实现继承。
function extendCopy(p) {
　var c = {};
　for (var i in p) {
　　c[i] = p[i];
　}
　c.uber = p;
　return c;
}
var Doctor = extendCopy(Chinese);
Doctor.career = '医生';

console.log(Doctor.nation); // 中国
// -------------------------------------------------------------------------
// 但是，这样的拷贝有一个问题。那就是，
// 如果父对象的属性等于数组或另一个对象，那么实际上，
// 子对象获得的只是一个内存地址，而不是真正拷贝，因此存在父对象被篡改的可能。
// 请看，现在给Chinese添加一个"出生地"属性，它的值是一个数组。
Chinese.birthPlaces = ['北京','上海','香港'];
// 通过extendCopy()函数，Doctor继承了Chinese。
var Doctor = extendCopy(Chinese);
// 然后，我们为Doctor的"出生地"添加一个城市：
Doctor.birthPlaces.push('厦门');
// 发生了什么事？Chinese的"出生地"也被改掉了！
console.log(Doctor.birthPlaces); //北京, 上海, 香港, 厦门
console.log(Chinese.birthPlaces); //北京, 上海, 香港, 厦门
// 所以，extendCopy()只是拷贝基本类型的数据，我们把这种拷贝叫做"浅拷贝"。这是早期jQuery实现继承的方式。
// ---------------------------------------------------------------------------

// 3.深拷贝
// 所谓"深拷贝"，就是能够实现真正意义上的数组和对象的拷贝。它的实现并不难，只要递归调用"浅拷贝"就行了。
function deepCopy(p, c) {
　var c = c || {};
　for (var i in p) {
　　if (typeof p[i] === 'object') {
　　　c[i] = (p[i].constructor === Array) ? [] : {};
　　　deepCopy(p[i], c[i]);
　　}else {
　　　c[i] = p[i];
　　}
　}
　return c;
}
// 使用的时候这样写：
var Doctor = deepCopy(Chinese);
// 现在，给父对象加一个属性，值为数组。然后，在子对象上修改这个属性：
Chinese.birthPlaces = ['北京','上海','香港'];
Doctor.birthPlaces.push('厦门');
// 这时，父对象就不会受到影响了。
console.log(Doctor.birthPlaces); //北京, 上海, 香港, 厦门
console.log(Chinese.birthPlaces); //北京, 上海, 香港
// 目前，jQuery库使用的就是这种继承方法。

// 阮一峰
// http://www.ruanyifeng.com/blog/2011/06/designing_ideas_of_inheritance_mechanism_in_javascript.html