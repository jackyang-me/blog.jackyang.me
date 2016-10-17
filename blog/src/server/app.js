var path = require('path');
var koa = require('koa');
var serve = require('koa-static');
var koaLogger = require('koa-logger');
var log4js = require('log4js');
var bodyParser = require('koa-bodyparser');
var postRouter = require('./routers/post');
var AV = require('leancloud-storage');

var PORT = 4141;
var logger = log4js.getLogger();
var app = koa();

AV.init({
  appId: '849H3n1s7MtILQhdMEYOvOD6-gzGzoHsz',
  appKey: 'g0v4ClWyQtyu8EMQLxQ40xWQ'
});

// error handler
// must be the 1st middleware
/*app.use(function *(next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    this.body = err.message;
    this.app.emit('error', err, this);
  }

  //This will set status and message
  //this.throw('Error Message', 500);

  //This will only set message
  // throw new Error('Error Message');
});*/

// logger
app.use(koaLogger());

// log4js
app.use(function *(next) {
  logger.debug(this.request.method, this.request.url);
  yield next;
});

// body parser
app.use(bodyParser());

// server static files
app.use(serve(path.resolve(__dirname, '../../')));
app.use(serve(path.resolve(__dirname, '../../dist')));

// routes
app.use(postRouter.routes());

app.listen(PORT, function () {
  logger.debug('server is running on port', PORT);
});
