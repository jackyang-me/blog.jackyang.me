var path = require('path')
var adminRouter = require('koa-router')()

/*
 * need change webpack config for public and static path
adminRouter.post('/admin', function () {
  this.req.sendFile(path.join(__dirname, '../../../dist/admin/index.html'))
})
*/

module.exports = adminRouter
