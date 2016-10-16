'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var projectRoot = path.resolve(__dirname, './src');

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '',
    filename: '/js/[name].bundle.js',
    chunkFilename: '/js/[name].chunk.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'api': path.resolve(__dirname, './src/api'),
      'actions': path.resolve(__dirname, './src/vuex/actions'),
      'assets': path.resolve(__dirname, './src/assets'),
      'filters': path.resolve(__dirname, './src/filters'),
      'sass': path.resolve(__dirname, './src/sass'),
      'services': path.resolve(__dirname, './src/services')
    }
  },
  devtool: 'source-map',
  module: {
    preLoaders: [{
      test: /.\vue$/,
      loader: 'eslint',
      include: projectRoot,
      exclude: /node_module/
    }, {
      test: /.\js$/,
      loader: 'eslint',
      include: projectRoot,
      exclude: /node_module/
    }],
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /.\js$/,
      loader: 'babel',
      include: projectRoot,
      exclude: /node_module/
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loaders: [
        'url?limit=1&name=/image/[name].[ext]',
        'image-webpack'
      ]
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 1000,
        name: '/font/[name].[ext]'
      }
    }]
  },
  imageWebpackLoader: {
    pngquant:{
      quality: "65-80",
      speed: 4
    }
  },
  /*vue: {
    loaders: {
      sass: 'vue-style!css!sass'
    }
  },*/
  eslint: {
    formatter: require('eslint-friendly-formatter')
  }
};
