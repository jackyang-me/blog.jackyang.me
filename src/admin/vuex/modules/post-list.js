import { getPostList, newPost } from 'api/post';

export default {
  state: {
    postList: [],
    selectedPostId: ''
  },
  mutations: {},
  actions: {
    getPostList ({state}, pageIndex) {
      getPostList({pageIndex: pageIndex}).then(response => {
        state.postList = response.data;
      });
    },
    selectPost ({state}, id) {
      state.selectedPostId = id;
    },
    newPost ({state}) {
      newPost().then(response => {
        state.postList.unshift(response.data);
        state.selectedPostId = response.data.objectId;
      });
    }
  },
  getters: {
    selectedPostDetails: state => {
      return state.postList.filter(post => post.objectId === state.selectedPostId)[0];
    }
  }
};
