import * as type from 'src/admin/vuex/mutation-types'
import * as postAPI from 'api/post'

const state = {
  postDetails: null
}

const mutations = {
  [type.BLOG_RECEIVE_POST] (state, { postDetails }) {
    state.postDetails = postDetails
  }
}

const actions = {
  getPostDetails ({ commit }, postId) {
    postAPI.getPostDetails(postId).then(response => {
      commit(type.BLOG_RECEIVE_POST, { postDetails: response.data })
    })
  }
}

export default {
  state,
  mutations,
  actions
};
