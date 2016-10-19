var AV = require('leancloud-storage');
var PostAVObject = AV.Object.extend('Post');

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
  return query.find().then(function (results) {
    return results;
  });
}

function publishPost (post) {
  post.status = 'released';
  post.releasedAt = new Date();

  if (post.id) {
    return updatePost(post.id, post);
  } else {
    return createPost(post);
  }
}

function createPost (post) {
  var postObj = new PostAVObject();
  var now = new Date();

  postObj.set('title', post.title);
  postObj.set('content', post.content);
  postObj.set('tags', post.tags);
  postObj.set('releasedAt', now);
  postObj.set('lastUpdatedAt', now);
  postObj.set('status', post.status);
  return postObj.save();
}

function saveDraft (post) {
  post.status = 'draft';
  if (post.id) {
    return updatePost(post.id, post);
  } else {
    return createPost(post);
  }
}

function updatePost (id, data) {
  var post = AV.Object.createWithoutData('Post', id);
  post.set('title', data.title);
  post.set('content', data.content);
  post.set('tags', data.tags);
  post.set('lastUpdatedAt', new Date());
  post.set('releasedAt', post.releasedAt);
  post.set('status', post.status);
  return post.save();
}

function deletePost (id) {
  var post = AV.Object.createWithoutData('Post', id);
  post.set('status', 'deleted');
  return post.save();
}

function hidePost (id) {
  var post = AV.Object.createWithoutData('Post', id);
  post.set('status', 'hide');
  return post.save();
}

module.exports = {
  getPost: getPost,
  getPostList: getPostSummaryList,
  publishPost: publishPost,
  saveDraft: saveDraft,
  updatePost: updatePost,
  deletePost: deletePost,
  hidePost: hidePost
};
