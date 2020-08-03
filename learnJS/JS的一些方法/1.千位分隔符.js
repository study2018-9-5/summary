
// 定义分割函数
function delimiter(num) {
  var RegExp = /(\d)(?=(\d{3})+\.)/g;
  return (Number(num).toFixed(2).replace(RegExp, '$1,'))
}

console.log(delimiter(1000));