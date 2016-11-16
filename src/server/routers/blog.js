'use strict'

const blogRouter = require('koa-router')()
const postService = require('../services/post')
const actionLogService = require('../services/action-log')

blogRouter.get('/', function *() { this.redirect('/blog/index.html') })
blogRouter.get('/blog', function *() { this.redirect('/blog/index.html') })
blogRouter.get('/blog/posts', postService.postListReleased) // get post list, need handle pagination page=10&pageSize=10
blogRouter.get('/blog/posts/:postId', postService.postDetails) // get a post
blogRouter.patch('/blog/posts/:postId', postService.partialUpdate) // update field(s) of post

blogRouter.post('/blog/actionLog', actionLogService.create)

module.exports = blogRouter;
