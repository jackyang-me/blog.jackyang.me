var webpack = require('webpack')
var merge = require('webpack-merge')
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var config = require('../../config/admin')
var baseWebpackConfig = require('./webpack.base.config')

var webpackConfig = merge(baseWebpackConfig, {
  devtool: '#eval-source-map',
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    new HtmlWebpackPlugin({
      title: 'Admin', // title is not working for template
      // filename: 'app.html', // default is index html, no matter what's the name of template file
      template: path.join(__dirname, '../../src/admin/index.html'),
      hash: false
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
})

module.exports = webpackConfig
