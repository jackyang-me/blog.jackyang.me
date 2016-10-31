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
    console.log('catch it')
    // this.throw(500, 'get post details failed') // this will end the process of server
  })*/

  this.status = 200
  this.body = {
    code: 0,
    data: result
  }
}

exports.postList = function *() {
  let pageSize = this.request.query.pageSize || 20
  let pageIndex = this.request.query.pageIndex || 1
  let summary = this.request.query.summary || false
  let query = new AV.Query('Post')
  let postList = []

  summary && query.select(['title', 'subtitle', 'releasedAt', 'smallCoverImage', 'coverImage', 'readCount'])
  query.descending('releasedAt')
  query.limit(pageSize)
  query.skip(pageSize * (pageIndex - 1))
  query.equalTo('status', 'released')

  postList = yield query.find()
  this.status = 200
  this.body = {
    code: 0,
    data: postList
  }
}

exports.update = function *() {
 let postId = this.request.params.postId
 let request = this.body
 let post = AV.Object.createWithoutData('Post', postId)
 let result

 validateModel(request, PostModel.fields)
 if (validateResult.error) {
   this.throw(400, validateResult.error)
 }
 fillModel(post, request, PostModel.fields)

 result = yield post.save()

 this.status = 200
 this.body = {
   code: 0,
   data: result
 }
}

exports.partialUpdate = function *() {

}

exports.delete = function *() {
  let postId = this.request.params.postId
  let post = AV.Object.createWithoutData('Post', postId)
  let result

  post.set('status', 'deleted')
  result = yield post.save()

  this.status = 200
  this.body = {
    code: 0,
    data: result
  }
}
