var path = require('path')
var koa = require('koa')
var serve = require('koa-static')
var koaLogger = require('koa-logger')
var onerror = require('koa-onerror')
var log4js = require('log4js')
var bodyParser = require('koa-bodyparser')
var config = require('./config')
var AV = require('leancloud-storage')
var PORT = config.port
var logger = log4js.getLogger()
var app = koa()

var postRouter = require('./routers/post')
var uploadRouter = require('./routers/upload')

AV.init({
  appId: config.AV.appId,
  appKey: config.AV.appKey
})

// error handle
onerror(app)
app.on('error', function (err, ctx) {
  console.error('app error')
  logger.error(err, ctx)
})

// logger
app.use(koaLogger())

// log4js
app.use(function *(next) {
  logger.debug(this.request.method, this.request.url)
  yield next
})

// body parser
app.use(bodyParser())

// server static files
config.staticPath.forEach(function (staticPath) {
    app.use(serve(staticPath))
})

// routes
app.use(postRouter.routes())
app.use(uploadRouter.routes())

app.listen(PORT, function () {
  logger.debug('server is running on port', PORT)
})
