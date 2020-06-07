// 再有Babel的情况下，我们可以直接使用ES6的模块化。
// a.js
export function a() {}
import {a} from 'a.js'

//  b.js
export default function () {}
import XXX from 'b.js'


// CommonJs是Node独有的规范
// a.js
module.exports = {
  a: 1
}
// or
exports.a = 1

// b.js
var module = require('a.js');
module.a   // 1