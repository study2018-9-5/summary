let name = '小明';
let age = 20;
let fn = function () {
  return `My name is ${name},I'm ${age} years old.`
};

export {name, age, fn}


var a = "My name is Tom!";
export default a; // 仅有一个
// export default var c = "error"; 
// default 已经是对应的导出变量，不能跟着变量声明语句。