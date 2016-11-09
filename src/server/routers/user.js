var userRouter = require('koa-router')()
var userService = require('../services/user')

userRouter.get('/login')

module.exports = userRouter
