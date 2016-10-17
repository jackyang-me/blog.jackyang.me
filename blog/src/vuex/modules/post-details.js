import { getPostDetails } from 'api/post';

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
    }
  },
  getters: {
    postDetails: state => {
      return state.postDetails;
    }
  }
};
