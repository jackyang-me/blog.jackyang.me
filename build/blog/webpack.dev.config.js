var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var config = require('../../config/blog')
var baseWebpackConfig = require('./webpack.base.config')

var webpackConfig = merge(baseWebpackConfig, {
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new HtmlWebpackPlugin({
      title: 'Blog', // title is not working for template
      // filename: 'app.html', // default is index html, no matter what's the name of template file
      template: path.join(__dirname, '../../src/blog/index.html'),
      hash: false
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
})

module.exports = webpackConfig
