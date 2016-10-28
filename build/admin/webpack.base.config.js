var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var utils = require('./utils')
var config = require('../../config/admin')
var projectRoot = path.resolve(__dirname, '../../')

module.exports = {
  entry: {
    app: path.resolve(projectRoot, 'src/admin/app.js'),
    vendor: ['vue', 'vuex', 'vue-router']
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(projectRoot, 'node_modules')],
    alias: {
      'src': path.resolve(projectRoot, 'src'),
      'assets': path.resolve(projectRoot, 'src/admin/assets'),
      'components': path.resolve(projectRoot, 'src/admin/components'),
      'api': path.resolve(projectRoot, 'src/admin/api'),
      'filters': path.resolve(projectRoot, 'src/admin/filters'),
      'sass': path.resolve(projectRoot, 'src/admin/sass')
    }
  },
  resolveLoader: {
    fallback: [path.join(projectRoot, 'node_modules')]
  },
  /*
  externals: {
    'jQuery': 'window.jQuery' // => when var $ = require('jQuery') will return window.jQuery
  },
  */
  module: {
    /*preLoaders: [{
      test: /\.vue$/,
      loader: 'eslint',
      include: projectRoot,
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'eslint',
      include: projectRoot,
      exclude: /node_modules/
    }],*/
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.js$/,
      loader: 'babel',
      include: projectRoot,
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: "css"
    }, {
      test: /\.scss$/,
      //loaders: ['css', 'sass']
      loader: ExtractTextPlugin.extract('css!sass')
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }]
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('css'),
      scss: ExtractTextPlugin.extract('css!sass')
    }
  },
  plugins: [
    /*
    new webpack.ProvidePlugin({
      $: 'jQuery' // when use $(), webpack will require('jQuery') from npm modules
    }),
    */
    new ExtractTextPlugin('style.css')
  ]
}
