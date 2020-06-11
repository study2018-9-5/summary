/*
  使用场景：
  ---------
  cookie：因为考虑到每个HTTP请求都会带着Cookie的信息，所以Cookie当然是能精简就精简啦，
          比较常用的一个应用场景就是判断用户是否登录。
  -------------------------------------------------------------------------------
  localStorage：接替了 Cookie 管理购物车的工作，同时也能胜任其他一些工作。
                比如HTML5游戏通常会产生一些本地数据，localStorage 也是非常适用的。
  -------------------------------------------------------------------------------
  sessionStorage：如果遇到一些内容特别多的表单，为了优化用户体验，
                  我们可能要把表单页面拆分成多个子页面，然后按步骤引导用户填写。
  ===============================================================================

  操作：
  -----
  cookie：存储：document.cookie = "username=xiaoming; expires=time; path=/"
          读取：document.cookie
          删除：document.cookie = "username=; expires=outtime; path=/"
          ------------------------------------------------------------------------
  如果想让多个页面共享cookie的话：指定Path为"/"即可
  --------------------------------------------------------------------------------
  localStorage和sessionStorage都具有相同的操作方法，例如setItem、getItem和removeItem等
  存储：window.localStorage.setItem("key", "value")
  获取：window.localStorage.getItem("key")
  删除：window.localStorage.removeItem("key")
  清除所有：window.localStorage.clear()
=============================================================================================================
  问题1.如何隔离开不同页面之间的localStorage（总不能在百度的页面上能读到腾讯的localStorage吧）。
  ------
  答：localStorage只要在相同的协议、相同的主机名、相同的端口下，就能读取/修改到同一份localStorage数据。
      sessionStorage比localStorage更严苛一点，除了协议、主机名、端口外，还要求在同一窗口（也就是浏览器的标签页）下。
*/