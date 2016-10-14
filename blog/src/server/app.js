var path = require('path');
var koa = require('koa');
var serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
var app = koa();
var router = require('./router');
var AV = require('leancloud-storage');

AV.init({
  appId: '849H3n1s7MtILQhdMEYOvOD6-gzGzoHsz',
  appKey: 'g0v4ClWyQtyu8EMQLxQ40xWQ'
});

// body parser
app.use(bodyParser());

// server static files
app.use(serve(path.resolve(__dirname, '../../')));
app.use(serve(path.resolve(__dirname, '../../dist')));

// routes
app.use(router.routes());

app.listen(4141);
