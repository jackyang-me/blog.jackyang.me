var postRouter = require('koa-router')();
var postService = require('../services/post');
var moment = require('moment');

postRouter.get('/post/:id', function *(next) {
  var post = yield postService.getPost(this.params.id);

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

postRouter.post('/post/new', function *(next) {
  var result = yield postService.newPost();
  this.body = {
    code: 0,
    data: result
  };
});

postRouter.post('/post/delete', function *(next) {
  var result = yield postService.deletePost(this.request.body.id);
  this.body = {
    code: 0,
    data: result
  };
});

postRouter.post('/post/saveDraft', function *(next) {
  var post = this.request.body;
  var result = yield postService.saveDraft(post);
  this.body = {
    code: 0,
    data: {
      post: result
    }
  };
});

postRouter.post('/post/update', function *(next) {
  var post = this.request.body;
  var result = yield postService.updatePost(post);
  this.body = {
    code: 0,
    data: {
      post: result
    }
  };
});

postRouter.post('/post/publish', function *(next) {
  var post = this.request.body;
  var result = yield postService.publishPost(post);
  this.body = {
    code: 0,
    data: {
      post: result
    }
  };
});

module.exports = postRouter;
