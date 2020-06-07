const webpack = require('webpack');
// webpack合并工具
const merge = require('webpack-merge');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',

  plugins: [
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),
    // 当使用process.env.NODE_ENV==='production'时，一些library可能针对具体用户的环境进行代码优化，
    // 从而删除或添加一些重要代码。我们可以使用webpack内置的DefinePlugin为所有的依赖定义这个变量。
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});