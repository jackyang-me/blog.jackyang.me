var webpack = require('webpack')
var path = require('path')
var merge = require('webpack-merge')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var config = require('../../config/admin')
var baseWebpackConfig = require('./webpack.base.config')
var utils = require('./utils')

var webpackConfig = merge(baseWebpackConfig, {
  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[name].[chunkhash].js')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.build.env
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    //new ExtractTextPlugin(utils.assetsPath('css/[name].[contenthash].css')),
    new ExtractTextPlugin('[name].[contenthash].css'),
    new HtmlWebpackPlugin({
      title: 'App', // title is not working for template
      // filename: 'app.html', // default is index html, no matter what's the name of template file
      template: path.join(__dirname, '../../src/admin/index.html'),
      hash: false,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js'
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    })
  ]
})

module.exports = webpackConfig
