import { getPostDetails, deletePost, updatePost, publishPost, saveDraft } from 'api/post';

export default {
  state: {
    postDetails: null,
    postCommentList: []
  },
  mutations: {},
  actions: {
    getPostDetails ({state}, postId) {
      getPostDetails(postId).then(response => {
        state.postDetails = response.data;
      });
    },
    deletePost ({rootState}, id) {
      deletePost(id).then(response => {
        rootState.postList.postList = rootState.postList.postList.filter(post => post.objectId !== id);
        rootState.postList.selectedPostId = '';
      });
    },
    saveDraft (store, post) {
      saveDraft(post).then(response => {
        console.log('saved succ', response);
      });
    },
    updatePost (store, post) {
      updatePost(post).then(response => {
        console.log('updated successfully', response);
      });
    },
    publishPost (store, post) {
      publishPost(post).then(response => {
        console.log('published successfully', response);
      });
    }
  }
};
