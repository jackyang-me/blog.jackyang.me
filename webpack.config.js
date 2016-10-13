'use strict';
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyPlugin = require('copy-webpack-plugin');
var path = require('path');
var ASSETS_PREFIX = require('./src/config.js').ASSETS_PREFIX;

/*
    这个参数需要根据发布不同的环境来配置，这个决定了动态的chunk文件的下载路径
    例如，如果prefix留空，那么chunk的下载路径是根据index.html的路径来定的，而正式服上js和素材文件（index.html）是分开的，所这里应该配置js被上传的服务器路径
*/
//var ASSETS_PREFIX = ''; // local
//var ASSETS_PREFIX = 'http://1251097942.cdn.myqcloud.com/1251097942/mc3-1-test/app/'; // test server
//var ASSETS_PREFIX = 'http://1251097942.cdn.myqcloud.com/1251097942/mc3-1/app/'; // server

function createCopyList () {
    var list = [];

    var JS_FILES = [
        '../js/com.wy.RHPlatform.Authorize.js',
        '../js/com.wy.RHPlatform.Constants.js',
        '../js/com.wy.RHPlatform.Navigation.js',
        '../js/com.wy.RHPlatform.Share.js',
        '../js/com.wy.RHPlatform.Utils.js'
    ];

    JS_FILES.forEach(function (filePath) {
        list.push({
            from: path.resolve(__dirname, filePath),
            to: path.resolve(__dirname, './assets/js')
        });
    });

    list.push({
        from: path.resolve(__dirname, './src/assets/js'),
        to: path.resolve(__dirname, './assets/js')
    });

    list.push({
        from: path.resolve(__dirname, './src/assets/css'),
        to: path.resolve(__dirname, './assets/css')
    });

    list.push({
        from: path.resolve(__dirname, './src/assets/image/icons'),
        to: path.resolve(__dirname, './assets/image')
    });

    return list;
}

var now = new Date()*1;
module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, './assets'),            // generated files will be put here: js, css, images ...
        // if there is no publicPath, assets/js/allday.chunk.js would like 'localhost:8090/js/allday.chunk.js'
        // if publicPath configured as 'assets', assets/js/allday.chunk.js would like 'localhost:8090/webapp/app/assets/js/allday.chunk.js'
        // publicPath: 'assets',
        publicPath: ASSETS_PREFIX + 'assets',
        filename: '/js/[name].bundle.js',
        //chunkFilename: '/js/[name].chunk' + now + '.js'
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
            'services': path.resolve(__dirname, './src/services')
        }
    },
    // devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.css$/,
            // loader: ExtractTextPlugin.extract('style-loader', 'css-loader')      // put required css resources into standalone .css file
            loader: "style-loader!css-loader"
        }, {
            test: /\.json$/,
            loader: 'json'
        }/*, {
            test: /\.mp3$/,
            loader: 'url?name=/sound/[name].[ext]'
        }*/, {
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
            css: ExtractTextPlugin.extract('css')       // put style tag in .vue file into standalone .css file
        }
    },*/
    plugins: [
        new CopyPlugin(createCopyList(), {ignore: ['.svn/**/*']}),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ]
};