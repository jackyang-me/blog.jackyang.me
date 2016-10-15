var postRouter = require('koa-router')();
var postService = require('../services/post');

postRouter.get('/post/:id', function *(next) {
  var post;

  //try {
    post = yield postService.getPost(this.params.id);
  //} catch (error) {
    // console.error(error);
  //}

  if (post) {
    this.body = {code: 0, data: post};
  } else {
    this.body = {code: -1, error: 'not found'};
  }
});

postRouter.get('/post/error', function *(next) {
    throw new Error('i generated this error');
});

module.exports = postRouter;
