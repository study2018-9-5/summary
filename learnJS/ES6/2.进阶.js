// class(类)作为对象的模板被引入，可以通过class关键字定义类。class的本质是function。
class Example {
  // constructor方法是类的默认方法，创建类的实例化对象时被调用。
  constructor() {
    console.log('我是constructor')
  }
}
new Example()

// 封装与继承，getter/setter。

/* 
  ES6的模块化分为导出export与导入import两个模块。
  导出的函数声明与类声明必须要有名称(export default 命令另外考虑)。
  as的用法：不同模块导出接口名称命名重复，使用as重新定义变量名。
*/
import {name, age, fn} from './3.testExport.js';
console.log("name", name)
console.log("age", age)
console.log("fn()", fn())

/* 
  在一个文件或模块中，export、import可以有多个，export default仅有一个。
  通过export方式导出，在导入时要加{}，export default则不需要。
  export default向外暴露的成员，不需要加{}，使用任意变量接收。
*/
import expDef from './3.testExport.js';
console.log("expDef", expDef)