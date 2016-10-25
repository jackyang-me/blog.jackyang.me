var crypto = require('crypto');
var ACCESS_KEY = 'MY_ACCESS_KEY';
var SECRET_KEY = 'MY_SECRET_KEY';

function generatePutPolicy (options) {
  return {
    scope: options.bucket + ':' + options.key,
    deadline: options.deadline || 3600,
    returnBody: '{"name":$(fname),"size":$(fsize),"w":$(imageInfo.width),"h":$(imageInfo.height),"hash":$(etag)}'
  };
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
  generatePutPolicy: generatePutPolicy,
  generateUptoken: function (putPolicy) {
    return generateUptoken(ACCESS_KEY, SECRET_KEY, putPolicy);
  }
};
