const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // 将编译后的代码映射回原始源代码，可以快速查找错误代码。
  devtool: 'inline-source-map',

  // 以上配置告知webpack-dev-server，在localhost:8080下建立服务，
  // 将dist目录下的文件，作为可访问文件。
  devServer: {
    contentBase: './dist'
  },
});