var adminRouter = require('koa-router')()
var postService = require('../services/post')

adminRouter.post('/admin/blog/posts', postService.create)  // new post
adminRouter.get('/admin/blog/posts', postService.postListNotDeleted) // get post list, need handle pagination page=10&pageSize=10
adminRouter.get('/admin/blog/posts/:postId', postService.postDetails) // get a post
adminRouter.put('/admin/blog/posts/:postId', postService.update) // update post by a complete post object
adminRouter.patch('/admin/blog/posts/:postId', postService.partialUpdate) // update field(s) of post
adminRouter.delete('/admin/blog/posts/:postId', postService.delete)

module.exports = adminRouter
