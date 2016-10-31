var uploadRouter = require('koa-router')();
var uploadService = require('../services/upload.js');

uploadRouter.get('/upload/token', function *next() {
  var policy = uploadService.generatePutPolicy({
    bucket: 'blog'
  });
  var uptoken = uploadService.generateUptoken(policy);
  this.body = {
    uptoken: uptoken
  };
});

module.exports = uploadRouter;
