import * as type from 'src/admin/vuex/mutation-types'
import * as postAPI from 'api/post'

const state = {
  posts: [],
  selectedPostIds: [],
  searchKey: ''
}

const mutations = {
  [type.BLOG_RECEIVE_POSTS] (state, { posts }) {
    state.posts = posts
  },
  [type.BLOG_SELECT_POST] (state, { id }) {
    state.selectedPostIds.push(id)
  },
  [type.BLOG_DESELECT_POST] (state, { id }) {
    state.selectedPostIds = state.selectedPostIds.filter(postId => postId !== id)
  },
  [type.BLOG_CHANGE_SEARCH_KEY] (state, { searchKey }) {
    state.searchKey = searchKey
  }
}

const actions = {
  getPostList ({ commit }, pageIndex) {
    postAPI.getPostList({ pageIndex }).then(response => {
      commit(type.BLOG_RECEIVE_POSTS, { posts: response.data })
    })
  },
  selectPost ({ commit }, id) {
    commit(type.BLOG_SELECT_POST, { id })
  },
  changeSearchKey ({ commit }, searchKey) {
    commit(type.BLOG_CHANGE_SEARCH_KEY, { searchKey })
  }
}

export default {
  state,
  mutations,
  actions
};
