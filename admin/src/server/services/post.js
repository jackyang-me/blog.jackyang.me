var AV = require('leancloud-storage');
var moment = require('moment');
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
  query.select([
    'title', 'subtitle', 'releasedAt',
    'smallCoverImage', 'coverImage',
    'readCount', 'status'
  ]);
  query.limit(pageSize);
  query.skip(pageSize * pageIndex);
  return query.find().then(function (results) {
    return results;
  });
}

function publishPost (post) {
  var now = new Date();

  post.status = 'released';
  post.releasedAt = now;
  post.lastUpdatedAt = now;

  if (post.id) {
    return updatePost(post.id, post);
  } else {
    return createPost(post);
  }
}

function newPost () {
  var now = new Date();
  return createPost({
    title: moment().format('YYYY/MM/DD'),
    content: 'something you want to share today ...',
    lastUpdatedAt: now,
    status: 'draft'
  });
}

function createPost (data) {
  var post = new PostAVObject();

  post.set('title', data.title);
  post.set('subtitle', data.subtitle);
  post.set('content', data.content);
  post.set('tags', data.tags);
  post.set('smallCoverImage', data.smallCoverImage);
  post.set('coverImage', data.coverImage);
  post.set('readCount', data.readCount);
  post.set('releasedAt', data.releasedAt);
  post.set('lastUpdatedAt', data.lastUpdatedAt);
  post.set('status', data.status);

  return post.save();
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
  post.set('subtitle', data.subtitle);
  post.set('content', data.content);
  post.set('tags', data.tags);
  post.set('smallCoverImage', data.smallCoverImage);
  post.set('coverImage', data.coverImage);
  post.set('readCount', data.readCount);
  post.set('releasedAt', data.releasedAt);
  post.set('lastUpdatedAt', data.lastUpdatedAt);
  post.set('status', data.status);

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
  newPost: newPost,
  getPost: getPost,
  getPostSummaryList: getPostSummaryList,
  publishPost: publishPost,
  saveDraft: saveDraft,
  updatePost: updatePost,
  deletePost: deletePost,
  hidePost: hidePost
};
