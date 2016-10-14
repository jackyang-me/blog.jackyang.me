var path = require('path');
var koa = require('koa');
var serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
var app = koa();
var router = require('./router');

// body parser
app.use(bodyParser());

// server static files
app.use(serve(path.resolve(__dirname, '../../')));
app.use(serve(path.resolve(__dirname, '../../dist')));

// routes
app.use(router.routes());

app.listen(4140);
