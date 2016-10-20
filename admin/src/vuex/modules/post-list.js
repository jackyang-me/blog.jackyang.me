import { getPostList } from 'api/post';

export default {
  state: {
    postList: [],
    selectedPostId: null
  },
  mutations: {},
  actions: {
    getPostList ({state}, pageIndex) {
      getPostList(pageIndex).then(response => {
        state.postList = response.data;
      });
    },
    selectPost ({state}, id) {
      state.selectedPostId = id;
    }
  },
  getters: {
    postList: state => {
      return state.postList;
    },
    selectedPostId: state => {
      return state.selectedPostId;
    }
  }
};
