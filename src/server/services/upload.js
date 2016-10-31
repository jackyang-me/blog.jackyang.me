var crypto = require('crypto');
var ACCESS_KEY = '8RflFd93xHYRl6hFMJJ-dMeMaBiJtwfqj6lUt9qy';
var SECRET_KEY = 'dCd4aLlp4o6SfOuRbuydGiZyin85KLM8-lzvXIge';

function generatePutPolicy (options) {
  return {
    scope: options.key ? options.bucket + ':' + options.key : options.bucket,
    deadline: getDeadline(options.expiresIn || 1000 * 60 * 60), // 1 hour
    returnBody: options.returnBody || '{"name":$(fname),"size":$(fsize),"w":$(imageInfo.width),"h":$(imageInfo.height),"hash":$(etag)}'
  };
}

function getDeadline (expiresIn) {
  return Math.round((new Date().getTime() + expiresIn) / 1000)
}

function base64 (value) {
  return new Buffer(value).toString('base64');
}

function urlSafeBase64 (value) {
  return value.replace(/\//g, '_').replace(/\+/g, '-');
}

function hmacSha1 (key, value, type) {
  return crypto.createHmac('sha1', key).update(value).digest(type || 'hex'); // base64 or hex
}

function generateUptoken (accessKey, secretKey, putPolicyObject) {
  var policyJSON = JSON.stringify(putPolicyObject);
  var encodedPolicy = urlSafeBase64(base64(policyJSON));
  var encodedSign = urlSafeBase64(hmacSha1(secretKey, encodedPolicy, 'base64'));
  return [accessKey, encodedSign, encodedPolicy].join(':');
}

module.exports = {
  getDeadline: getDeadline,
  generatePutPolicy: generatePutPolicy,
  generateUptoken: function (putPolicy) {
    console.log('putPolicy', putPolicy)
    return generateUptoken(ACCESS_KEY, SECRET_KEY, putPolicy);
  }
};
