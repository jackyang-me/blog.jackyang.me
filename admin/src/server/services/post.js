var AV = require('leancloud-storage');

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

module.exports = {
  getPost: getPost,
  getPostList: getPostSummaryList
};
