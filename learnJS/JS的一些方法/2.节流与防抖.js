/*
  节流(throttle)：
    高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率。

  使用场景：
    1.鼠标不断点击触发，mousedown(单位时间内只触发一次)。
    2.监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断。
*/
function throttle(fn) {
  // 通过闭包保存一个标记
  let flag = true; 
  return function () {
    // 在函数开头判断标记是否为true，不为true则return
    if (!flag) {
      return;
    }
    // 立即设置为false
    flag = false;
    // 将外部传入的函数的执行放在setTimeout中
    setTimeout(() => { 
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
      // 当定时器没有执行的时候标记永远是false，在开头被return掉
      fn.apply(this, arguments);
      flag = true;
    }, 500);
  };
}
// 处理函数
function handle1() {
  console.log("发送ajax");
}
// 滚动事件
window.addEventListener('scroll', throttle(handle1));




/*
  防抖(debounce)：
    当持续触发事件时，一定时间段内没有再触发事件，
    事件处理函数才会执行一次，如果设定的时间到来之前，
    又一次触发了事件，就重新开始延时。

  缺点：如果事件在规定的时间间隔内被不断的触发，则调用方法会被不断的延迟

  使用场景：
    1.search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
    2.window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次。
*/
function debounce(fn) {
  // 创建一个标记用来存放定时器的返回值。
  let timeout = null; 
  return function () {
    // 每当用户输入的时候把前一个setTimeout清除掉。
    clearTimeout(timeout); 
    // 然后又创建一个新的setTimeout, 这样就能保证间隔内，
    // 如果持续触发，就不会执行 fn 函数。
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500);
  };
}
// 处理函数
function handle2(e) {
  console.log(e.target.innerWidth, e.target.innerHeight);
}
// 窗口改变大小
window.addEventListener('resize', debounce(handle2))
