var postRouter = require('koa-router')()
var postService = require('../services/post')

postRouter.post('/posts', postService.create)  // new post
postRouter.get('/posts', postService.postList) // get post list, need handle pagination page=10&pageSize=10
postRouter.get('/posts/:postId', postService.postDetails) // get a post
postRouter.put('/posts/:postId', postService.update) // update post by a complete post object
postRouter.patch('/posts/:postId', postService.partialUpdate) // update field(s) of post
postRouter.delete('/posts/:postId', postService.delete)

module.exports = postRouter;
