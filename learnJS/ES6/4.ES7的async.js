// async是ES7才有的与异步操作有关的关键字，和Promise，Generator有很大关联的。
async function helloAsync(){
  return "HelloAsync";
}
// Promise{'helloAsync'}，async函数返回一个Promise对象，可以使用then方法添加回调函数。
console.log("helloAsync -> HelloAsync", helloAsync())
helloAsync().then(function (res) {
  // console.log("res", res)    // HelloAsync
})

/* 
  async函数中可能会有await表达式，async函数执行时，如果遇到await就会先暂停执行，
  等到触发的异步操作完成后，恢复async函数的执行并返回解析值。
  await操作符用于等待一个Promise对象,它只能在异步函数async function内部使用。
*/
function testAwait1() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('testAwait1');
      resolve();
    }, 1000)
  })
}
async function test1() {
  await testAwait1();
  console.log("testAwaitAfter1");
}
test1()

/* 
  await针对所跟不同表达式的处理方式：
  Promise对象：await会暂停执行，等待Promise对象resolve，然后恢复async函数的执行并返回解析值。
  非Promise对象：直接返回对应的值。
*/
function testAwait2() {
  console.log('testAwait2');
}
async function test2() {
  await testAwait2();
  console.log('testAwaitAfter2');
}
test2()