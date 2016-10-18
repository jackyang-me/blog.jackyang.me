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

postRouter.get('/post/list/:page', function *(next) {
    var postList = [];
    var pageIndex = this.params.page - 1;

    if (isNaN(pageIndex)) {
      pageIndex = 0;
    }

    postList = yield postService.getPostSummaryList(pageIndex, 20);
    this.body = {code: 0, data: postList};
});

module.exports = postRouter;
