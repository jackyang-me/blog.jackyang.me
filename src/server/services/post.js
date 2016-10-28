'use strict'

const AV = require('leancloud-storage')
const moment = require('moment');
const PostModel = require('../models/post')
const validateModel = require('../utils').model.validateModel
const fillModel = require('../utils').model.fillModel
const PostAVObject = AV.Object.extend('Post')

exports.create = function *() {
  let post = new PostAVObject()
  let request = this.body
  let validateResult = null
  let result = {}

  request.readCount = 0
  request.status = request.status ? request.status : 'draft'

  validateModel(request, PostModel.fields)
  if (validateResult.error) {
    this.throw(400, validateResult.error)
  }

  fillModel(post, request, PostModel.fields)

  result = yield post.save().catch(err => {
    this.throw(500, 'save post failed')
  })

  this.status = 200
  this.body = {
    code: 0,
    data: result
  }
}

exports.postDetails = function *() {
  let postId = this.params.postId
  let query = new AV.Query('Post')
  let result = yield query.get(postId)/*.catch(err => {
    // this.throw(500, 'get post details failed') // this will end the process of server
  })*/

  this.status = 200
  this.body = {
    code: 0,
    data: result
  }
}

exports.postList = function *() {

}

exports.update = function *() {

}

exports.partialUpdate = function *() {

}

exports.delete = function *() {

}

function getPost (id) {
  var query = new AV.Query('Post');
  return query.get(id).then(function (post) {
    return post;
  });
}

function getPostSummaryList (pageIndex, pageSize) {
  var query = new AV.Query('Post');
  query.descending('releasedAt');
  query.select(['title', 'subtitle', 'releasedAt', 'smallCoverImage', 'coverImage', 'readCount']);
  query.limit(pageSize);
  query.skip(pageSize * pageIndex);
  query.equalTo('status', 'released');
  return query.find().then(function (results) {
    return results;
  });
}
