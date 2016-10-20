import { getPostDetails, saveDraft, publish } from 'api/post';

export default {
  state: {
    expand: false,
    saving: false,
    loading: false,
    postDetails: null
  },
  mutations: {},
  actions: {
    getPostDetails ({state}, postId) {
      state.loading = true;
      getPostDetails(postId).then(response => {
        state.postDetails = response.data;
        state.loading = false;
      });
    },
    saveDraft ({state}) {
      state.saving = true;
      saveDraft(state.postDetails).then(response => {
        state.saving = false;
      });
    },
    publish ({state}) {
      state.saving = true;
      publish(state.postDetails).then(response => {
        state.saving = false;
      });
    },
    toggleExpand ({state}) {
      state.expand = !state.expand;
    },
    editPost ({state}, post) {
      state.postDetails = post;
    }
  },
  getters: {
    postDetails: state => {
      return state.postDetails;
    },
    expand: state => {
      return state.expand;
    },
    saving: state => {
      return state.saving;
    },
    loading: state => {
      return state.loading;
    }
  }
};
