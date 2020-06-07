/* 
  什么是JSON?
    JSON(JavaScript Object Notation)是一种轻量级的数据交换格式，
    通常用于服务端向网页传递数据。
  JSON的语法规则
    数据为 键/值 对，数据由逗号分隔，大括号保存对象，方括号保存数组。
  JSON的相关的两个函数：
    JSON.parse()：用于将一个JSON字符串转换为JavaScript对象。
    JSON.stringify()：用于将JavaScript值转换为JSON字符串。
*/

{"persons":[
  {"name": "小明1", "age": 20}, 
  {"name": "小明2", "age": 20},
  {"name": "小明3", "age": 20}
]}