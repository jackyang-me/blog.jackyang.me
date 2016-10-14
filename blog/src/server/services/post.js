var AV = require('leancloud-storage');

function getPost (id) {
  var query = new AV.Query('Post');
  return query.get(id).then(function (post) {
    return post;
  });
}

module.exports = {
  getPost: getPost
};
