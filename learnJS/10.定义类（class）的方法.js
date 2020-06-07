/* 
  定义类的三种方式
  在面向对象编程中，类（class）是对象（object）的模板，定义了同一组对象（又称"实例"）共有的属性和方法。
  Javascript语言不支持"类"，但是可以用一些变通的方法，模拟出"类"。
*/

// 1.构造函数法
// 这是经典方法，它用构造函数模拟"类"，在其内部用this关键字指代实例对象。
// 缺点：比较复杂，用到了this和prototype，编写和阅读都很费力。
function Cat() {
　this.name = "小黑";
}
// 类的属性和方法，还可以定义在构造函数的prototype对象之上。
Cat.prototype.makeSound = function(){
　console.log("喵喵喵");
}
// 生成实例的时候，使用new关键字。
var cat1 = new Cat();
console.log(cat1.name); // 大毛
cat1.makeSound();       // 喵喵喵
// --------------------------------------------------------------------------------------------------------


// 2.Object.create()法
// 优点：这种方法比"构造函数法"简单。
// 缺点：但是不能实现私有属性和私有方法，实例对象之间也不能共享数据，对"类"的模拟不够全面。
// 用这个方法，"类"就是一个对象，不是函数。
var Dog = {
　name: "大毛",
　makeSound: function(){ console.log("汪汪汪"); }
};
// 然后，直接用Object.create()生成实例，不需要用到new。
var dog1 = Object.create(Dog);
console.log(dog1.name); // 大毛
dog1.makeSound();       // 汪汪汪
// ---------------------------------------------------------------------------------------------------------


// 3.极简主义法
// 3.1这种方法不使用this和prototype，代码部署起来非常简单
// 3.2让一个类继承另一个类，实现起来很方便。只要在前者的createNew()方法中，调用后者的createNew()方法即可。
// 3.3私有属性和私有方法：在createNew()方法中，只要不是定义在cat对象上的方法和属性，都是私有的。
// 3.4数据共享：有时候，我们需要所有实例对象，能够读写同一项内部数据。
//    这个时候，只要把这个内部数据，封装在类对象的里面、createNew()方法的外面即可。
// 先定义一个Animal类。
var Animal = {
　createNew: function () {
　　var animal = {};
　　animal.sleep = function () { 
      console.log("睡懒觉"); 
    };
　　return animal;
　}  
};

var Cat = {
  action: "猫步",   // 数据共享
  createNew: function () {
    var cat = Animal.createNew(); // 然后，在Cat的createNew()方法中，调用Animal的createNew()方法。
    cat.name = '小黑';
    var sound = '喵喵喵';
    cat.makeSound = function () {
      console.log(Cat.action);
    }
    cat.makeAction = function (x) {
      Cat.action = x; // 数据共享
    }
    return cat;
  }
}
// 使用的时候，调用createNew()方法，就可以得到实例对象。
var cat1 = Cat.createNew();
cat1.makeSound();     // 喵喵喵 
cat1.sleep();         // 睡懒觉
console.log("cat1.sound", cat1.sound)   // 私有属性和私有方法,外部无法读取，只有通过cat的公有方法makeSound()来读取。
console.log("cat1.makeAction()", cat1.makeSound()) // 猫步

// -----这段有问题----
var cat2 = Cat.createNew();
cat1.makeAction("跑")
cat2.makeSound()

// http://www.ruanyifeng.com/blog/2012/07/three_ways_to_define_a_javascript_class.html
