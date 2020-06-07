const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 现在时间段的写法(2020/05/29)
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // 开发环境不压缩代码
  // mode: "development", 
  // 生产环境压缩代码(默认压缩)
  mode: "production",
  entry: {
    app: './src/index.js'
  },
  output: {
    // 此时name相当与app
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    // 在每次构建前清理dist文件夹
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
};