/*
 * @Author: wangsibo
 * @Date: 2020-09-02 14:17:53
 * @LastEditTime: 2020-09-02 15:05:17
 * @LastEditors: Please set LastEditors
 * @Description: 图片转换成base64压缩，转二进制，二进制转file
 * @FilePath: vue\src\utils\transformImgBase64.js
 */

/**
 * @description: 图片压缩转换成base64
 * @param {file} 选中的图片
 * @param {callback} 回调函数
 * @return {smallBase64} 压缩后的base64编码
 */
function transformImg(file, callback) {
  let imgFile = new FileReader();
  imgFile.onload = function (e) {
    let base64Img = e.target.result;
    let newImg = new Image();  // 创建一个图片对象
    newImg.onload = function () {
      let canvas = document.createElement("canvas");
      canvas.width = 150;	  //设置画布的宽度
      canvas.height = 150;	//设置画布的高度
      let ctx = canvas.getContext("2d");  // 可返回一个对象，该对象提供了用于在画布上绘图的方法和属性。
      ctx.drawImage(newImg, 0, 0, 150, 150);  // 画出宽度和高度决定了你复刻了多少像素，和是画布宽高度是两回事。
      let smallBase64 = canvas.toDataURL('image/jpeg', 0.9);  //canvas转成新的base64数据，第二个参数为保存质量。
      typeof callback == 'function'? callback(base64Img, smallBase64): '';  // base64Img：原来的base64; smallBase64：压缩之后的base64
    }
    newImg.src = base64Img;
  }
  imgFile.readAsDataURL(file);
}

/**
 * @description: 将base64转换为blob
 * @param {dataUrl} 生成的base64编码
 * @return {} 二进制编码
 */
const dataURLtoBlob = function(dataUrl) {
  var arr = dataUrl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

/**
 * @description: 将blob转换为file
 * @param {theBlob} 二进制编码
 * @param {fileName} 二进制编码
 * @return {theBlob} 组装好的文件
 */
const blobToFile = function(theBlob, fileName){
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}

export { transformImg, dataURLtoBlob, blobToFile }


 // that.miniImg = smallBase64;
      //调用
      // var blob = that.dataURLtoBlob(smallBase64);
      // var file1 = that.blobToFile(blob, 'avatar.jpg');
      // console.log('blob', blob);
      // let param = new FormData();
      // param.append("files", blob);
      // that.files = param;
