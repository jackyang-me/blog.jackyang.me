var uploadRouter = require('koa-router')()
var uploadService = require('../services/upload')

uploadRouter.get('/upload/token', uploadService.generateUptoken)

module.exports = uploadRouter
