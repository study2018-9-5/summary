// Date对象：用来表示日期和时间。
// 获取系统当前的时间，注：当前时间是浏览器从本机获得的，不一定准确。
// new Date()也可以设置时间
var time = new Date();
console.log("time", time)
// 转换成时间戳
console.log("Date.parse(time)", Date.parse(time))
// 获取本地时间
console.log("time.toLocaleString()", time.toLocaleString())
// 与本地时间相差8小时
console.log("time.toUTCString()", time.toUTCString())

 
/* 
  RegExp正则。
  创建正则表达式的两种方式。
  var RegExp1 = /正则表达式/;
  var RegExp2 = new RegExp();

  \d：匹配数字，\w：匹配数字或字母，\s：匹配空格，.：匹配任意字符。
  *：表示任意个字符(包括0个)，+：表示至少一个字符，?：表示0或1个字符，{n}：表示n个字符，{n, m}：表示n-m个字符。
  []：可以匹配更精确的范围，|：表示或[A|B]匹配A或B。
  ^：表示开始，^\d以数字开头。
  $：表示结束，\d$以数字结尾。
  ()：表示分组。

  RegExp.test()测定给字符串是否符合条件。
  RegExp.exec()匹配成功后提取出子串。
*/
// 例如：010-123456
var RE_1 = /^(\d{3})-(\d{3,8})$/;
console.log("RE_1.test('010-123456')", RE_1.test('010-123456'))
console.log("RE_1.exec('010-123456')", RE_1.exec('010-123456'))

// 贪婪匹配：也就是尽可能多的匹配字符，正则默认的是贪婪匹配。
// 例如1024000
var RE_2 = /^(\d+)(0*)$/;    // 这样的话(0*)只能匹配''字符串了。
var RE_3 = /^(\d+?)(0*)$/;   // ?这样就表示非贪婪匹配了。
console.log("RE_2.exec('1024000')", RE_2.exec('1024000'))
console.log("RE_3.exec('1024000')", RE_3.exec('1024000'))

// g表示全局匹配、i表示忽略大小写、m表示多行匹配。


/* 
  JSON(JavaScript Object Notation)：JS对象表示法，它是一种数据交换格式。
  序列化：将对象序列化成JSON格式的字符串，JSON.stringify()。
  反序列化：将JSON格式的字符串变成js对象，JSON.parse()。
*/
var person = {
  name: '小明',
  age: 20,
  gender: '男',
  'middle-school': 'NO.1 Middle School',
  skills: ['js', 'ts', 'html']
};

// 第二个参数控制如何筛选对象的键值，第三个是按缩进输出。
console.log("JSON.stringify(person, null, ' ')", JSON.stringify(person, null, ' '))
console.log("JSON.stringify(person, ['name', 'age'], ' ')", JSON.stringify(person, ['name', 'age'], ' '))