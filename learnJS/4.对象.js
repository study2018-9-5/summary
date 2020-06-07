/* 
  对象：是一种无序的集合数据类型，它由若干个键值对组成。
*/
var person = {
  name: '小明',
  'middle-school': 'No.1 Middle School'
};
// .操作符必须接有效的属性，若属性中含有特殊的字符，就必须用''括起来。
console.log("person.name", person.name)
console.log("person['middle-school']", person['middle-school'])

// 添加属性
person.age = 18;
console.log("person.age", person)

// 删除属性 
delete person.age;
console.log("delete person.name", person)

/* 
  检测对象是否拥有某一属性用in操作符，返回值为布尔值。
  这个属性不一定是person的，也可能是继承的。
  要判断一个属性是否是自身的，可以用hasOwnProperty()
*/
console.log("'name' in person", 'name' in person)
console.log("person.hasOwnProperty('name')", person.hasOwnProperty('name'))

// 循环对象的属性
for(var key in person){
  console.log("key", key)
}

// 由于数组也被称为对象，而它的每个元素的索引(index)被视为对象的属性
// 注：循环得到的是String而不是Number
var arr = ['a', 'b', 'c'];
for(i in arr){
  console.log("i", i, typeof i)
}

