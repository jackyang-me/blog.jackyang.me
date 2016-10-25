var uploadRouter = require('koa-router')();
var uploadService = require('../services/upload.js');

uploadRouter.get('/upload/token/:key', function *next() {
  var policy = uploadService.generatePutPolicy({
    bucket: 'blog',
    key: this.params.key
  });
  var uptoken = uploadService.generateUptoken(policy);
  this.body = {
    uptoken: uptoken
  };
});

module.exports = uploadRouter;
