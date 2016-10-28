require('shelljs/global')

var path = require('path')
var config = require('../../config/blog')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = process.env.NODE_ENV === 'production' ? require('./webpack.prod.config') : require('./webpack.dev.config')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n'
)

var spinner = ora('building blog app for ' + process.env.NODE_ENV + '\n')
spinner.start()

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath) // means npm run build has to be executed in project root path

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
