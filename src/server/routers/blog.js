var blogRouter = require('koa-router')()
var postService = require('../services/post')

blogRouter.get('/', function *() { this.redirect('/blog/index.html') })
blogRouter.get('/blog', function *() { this.redirect('/blog/index.html') })
blogRouter.get('/blog/posts', postService.postListReleased) // get post list, need handle pagination page=10&pageSize=10
blogRouter.get('/blog/posts/:postId', postService.increaseReadCount, postService.postDetails) // get a post
blogRouter.patch('/blog/posts/:postId', postService.partialUpdate) // update field(s) of post

module.exports = blogRouter;
