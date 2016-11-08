import * as type from 'src/admin/vuex/mutation-types'
import post from './post'

const state = {
  currentTab: 'POST'
}

const mutations = {
  [type.BLOG_CHANGE_TAB] (state, { tab }) {
    state.currentTab = tab
  }
}

const actions = {
  changeTab ({ commit, state }, tab) {
    commit(types.BLOG_CHANGE_TAB, { tab })
  }
}

export default {
  state,
  actions,
  mutations,
  modules: {
    post
  }
}
