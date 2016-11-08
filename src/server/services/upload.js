//var crypto = require('crypto');
var generator = require('qiniu-uptoken-generator')
var ACCESS_KEY = '8RflFd93xHYRl6hFMJJ-dMeMaBiJtwfqj6lUt9qy'
var SECRET_KEY = 'dCd4aLlp4o6SfOuRbuydGiZyin85KLM8-lzvXIge'

exports.generateUptoken = function *() {
  var policy = generator.generatePutPolicy({
    bucket: 'blog',
    returnBody: '{"name":$(fname),"size":$(fsize),"w":$(imageInfo.width),"h":$(imageInfo.height),"hash":$(etag),"key":$(key)}'
  })
  var uptoken = generator.generateUptoken(ACCESS_KEY, SECRET_KEY, policy)
  this.body = {
    uptoken: uptoken
  }
}
