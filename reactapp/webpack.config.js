const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js', // 最终将会打包在app.js中，app是entry的选项中的key值
    path: __dirname + '/dist' // 最终将在当前文件夹中创建一个dist目录，里面会有一个app.js
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  module: { // 各种解析器 解析css文件，解析js文件，解析less文件，解析scss文件 解析媒体类型文件 解析字体图标文件
    rules: [ // 各种解析器配置规则
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader' //从右往左解析 先用css-loade将css转成样式表文件，再通过style-loader将样式渲染到样式中
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.less$/,
        loader:'style-loader!css-loader!less-loader'
      },
      {
        test: /\.stylus$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      { test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
           limit: 10000,
           name: path.posix.join('static','img/[name].[hash:7].[ext]')
          }
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: path.posix.join('static', 'media/[name].[hash:7].[ext]')
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: path.posix.join('static', 'fonts/[name].[hash:7].[ext]')
          }
        }
    ]
  },
 // 跨域问题解决，服务器代理  反向代理
  devServer: { // 服务器的配置
    proxy: { // 代理服务器的配置
      '/api': {
        target: 'https://m.qidian.com', // 代理接口
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 代理的路径
        }
      }
    }
  },
  resolve: {
    extensions: ['.js','.css','.scss','.less','.stylus'], // 说明引入的文件可以省略后缀名 --- 缺省的后缀名 如果遇到前缀相同后缀不能的文件名，以第一次出现的文件为准
    alias: { // 别名的设置 src的目录设置为@
      '@': path.join(__dirname, './', 'src')
    }
  }
}