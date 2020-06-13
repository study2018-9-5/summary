// WebSocket对象作为一个构造函数，用于新建WebSocket实例。
// 执行下面语句之后，客户端就会与服务器进行连接。
var ws = new WebSocket("wss://echo.websocket.org");

// 实例对象的onopen属性，用于指定连接成功后的回调函数。
ws.onopen = function(event) { 
  console.log("Connection open ...", ws.readyState); 

  // 实例对象的send()方法用于向服务器发送数据。
  ws.send("Hello WebSockets!");
};

// 实例对象的onmessage属性，用于指定收到服务器数据后的回调函数。
ws.onmessage = function(event) {
  console.log( "Received Message: " + event.data, ws.readyState);
  ws.close();
};

// 实例对象的onclose属性，用于指定连接关闭后的回调函数。
ws.onclose = function(event) {
  console.log("Connection closed.", ws.readyState);
};

// 实例对象的onerror属性，用于指定报错时的回调函数。
ws.onerror = function(event) {
  console.error("WebSocket error observed:", event);
};

// 返回当前WebSocket的链接状态。
switch(ws.readyState) {
  // 值为0，表示正在连接。
  case WebSocket.CONNECTING: 
    console.log("0", WebSocket.CONNECTING)
    break;
  // 值为1，表示连接成功，可以通信了。
  case WebSocket.OPEN:
    console.log("1", WebSocket.OPEN)
    break;
  // 值为2，表示连接正在关闭。
  case WebSocket.CLOSING:
    console.log("2", WebSocket.CLOSING)
    break;
  // 值为3，表示连接已经关闭，或者打开连接失败。
  case WebSocket.CLOSED:
    console.log("3", WebSocket.CLOSED)
    break;
  default:
    break;
}