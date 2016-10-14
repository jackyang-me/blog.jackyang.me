var AV = require('leancloud-storage');
var Post = AV.Object.extend('Post');

function createPost () {
  var post = new Post();
  post.set('title', 'test title');
  post.set('content', 'test content');
  return post.save();
}

function deletePost () {

}

function updatePost () {

}

module.exports = {
  createPost: createPost,
  deletePost: deletePost,
  updatePost: updatePost
};
