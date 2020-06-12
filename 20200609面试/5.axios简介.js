/* 
  axios是通过promise实现对ajax技术的一种封装，就像jQuery实现ajax封装一样。
  简单来说：ajax技术实现了网页的局部数据刷新，axios实现了对ajax的封装。
  axios是ajax  ajax不止axios。
  -----------------------------------------------------------------------
  ES6 import引用：因为axios不是vue的插件，所以不能直接用use方法，需要将其加载到原型上。
  import axios from 'axios'

  如果要全局使用axios就需要在main.js中设置成全局的
  Vue.prototype.$axios = axios;
  
  然后再组件中通过this调用
  this.$axios.get();
  -------------------------------------------------------------------------------------
  使用：
  1.发送post请求，参数写在data属性中
    this.$axios({
      url: 'http://rap2api',
      method: 'post',
      data: {
        name: '小月'
      }
    }).then(res => {
      console.log('请求结果：', res);
    });
  --------------------------
  2.发送get请求，默认就是get请求，直接第一个参数写路径，第二个参数写配置对象，参数通过params属性设置。
    this.$axios('http://rap2api', {
      params: {
        name: '小月'
      }
    }).then(res => {
      console.log('请求结果：', res);
    });
  ----------------------------
  3.一次合并发送多个请求
    分别写两个请求函数，利用axios的all方法接收一个由每个请求函数组成的数组，
    可以一次性发送多个请求，如果全部请求成功，在axios.spread方法接收一个回调函数，
    该函数的参数就是每个请求返回的结果。

    getData1() {
      return this.$axios.get(url)
    },
    getData2() {
      return this.$axios.get(url)
    },
    getData3() {
      this.$axios.all([this.getData1(),this.getData2()])
      .then(this.$axios.spread(function(res1,res2){
          //当这两个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
        }
      ))
    },
  -----------------------------------------------------------------------------------------
  axios为所有请求方式都提供了别名：
    axios.get(url, [config])
    axios.post(url, [data], [config])
    axios.put(url, [data], [config])
    axios.delete(url, [config])
    axios.options(url, [config])
    axios.patch(url, [data], [config])
  ==========================================================================================
  axios配置默认值：
    // 创建axios实例
    import axios from 'axios'
    let Axios = axios.create();
    ------------------------------------------------------------------------
    1.可以通过Axios.defaults设置全局默认值，在所有请求中都生效。
      Axios.defaults.timeout = 3000;                        // 超时时间3秒
      Axios.defaults.headers.common["token"] = "";
      Axios.defaults.headers.post["Content-type"] = "application/json";
      Axios.defaults.baseURL = 'https://service.xxx.com;    //设置统一路径前缀

    2.拦截器：可以分别设置请求拦截和响应拦截，在发出请求和响应到达then之前进行判断处理。
      Axios.interceptors.response.use(config => {
        if (config) {
          return config;    // request时必须有返回的
        }
      },err => {
        return Promise.reject(err);
      });
      请求拦截器同样，只是把response换成request。第一个参数是成功回调，第二个是错误回调。

    3.也可以移除拦截器，就像移除js定时器一样的操作
      var myInterceptor = Axios.interceptors.request.use(function () {});
      Axios.interceptors.request.eject(myInterceptor);

  网站：https://www.kancloud.cn/yunye/axios/234845
*/