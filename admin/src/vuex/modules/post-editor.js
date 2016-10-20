export default {
  state: {
    expand: false,
    saving: false,
    loading: false
  },
  mutations: {},
  actions: {
    saveDraft (store, postId) {
      console.log('saving draft', store);
    },
    publish (store, postId) {
      console.log('publishing');
    },
    toggleExpand ({state}) {
      state.expand = !state.expand;
    }
  },
  getters: {
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
