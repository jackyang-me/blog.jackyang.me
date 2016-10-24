export default {
  state: {
    expand: false,
    saving: false,
    loading: false,
    postDetails: null
  },
  mutations: {},
  actions: {
    toggleExpand ({state}) {
      state.expand = !state.expand;
    }
  }
};
