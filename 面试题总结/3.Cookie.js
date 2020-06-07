/* 
  什么是 Cookie?
  Cookie是一段不超过4KB的小型文本数据，
  由名(name)/值(value)对形式存储和其它几个，
  控制Cookie有效期、安全性、使用范围的可选属性组成。
*/

// J可以使用 document.cookie 属性来创建、读取、及删除cookie
// 创建
document.cookie = "username=xiaoming; expires=time; path=/"

// 读取
document.cookie

// 删除，当删除时不必指定 cookie 的值，expires设置超过当前时间就好了。
document.cookie = "username=; expires=outtime; path=/"