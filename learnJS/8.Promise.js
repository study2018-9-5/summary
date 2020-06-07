/* 
  JS中的所有代码都是单线程的。
  由于这个缺陷导致JS所有的网络操作，浏览器事件，都必须是异步的。
*/
function callback() {
  console.log('正在执行callback')
}
console.log('before setTimeout');
setTimeout(callback, 1000);  // 1秒后调用callback函数。
console.log('after setTimeout');

/*
  Promise异步操作有三种状态：
    pending(进行中)、fulfilled(已成功)、rejected(已失败)。
    除了异步操作的结果，任何其他操作都无法改变这个状态。
  Promise对象只有：
    从pending变为fulfilled和从pending变为rejected的状态改变。
    只要处于fulfilled和rejected，状态就不会再变了即resolved(已定型)。 
*/
// resolve：解决，reject：拒绝。
var p = new Promise(function (resolve, reject) {
  resolve('resolve');
  reject('reject');
});
p.then(function (res) {
  
}).catch(function (err) {
  
})
