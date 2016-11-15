var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../../dist/blog/index.html'),
    assetsRoot: path.resolve(__dirname, '../../dist/blog'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '', // '/'
    productionSourceMap: true
  },
  dev: {
    env: require('./dev.env'),
    assetsRoot: path.resolve(__dirname, '../../dist/blog'),
    assetsSubDirectory: 'static',
    assetsPublicPath: ''
  }
}
