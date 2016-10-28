var userRouter = require('koa-router')()
var userService = require('../services/user')

userRouter.get('/user/login')

module.exports = userRouter
