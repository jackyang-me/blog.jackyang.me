import { getPostList } from 'api/post';

export default {
  state: {
    postList: []
  },
  mutations: {},
  actions: {
    getPostList ({state}, pageIndex) {
      getPostList({pageIndex: pageIndex}).then(response => {
        state.postList = response.data;
      });
    }
  },
  getters: {
    postList: state => {
      return state.postList;
    }
  }
};
