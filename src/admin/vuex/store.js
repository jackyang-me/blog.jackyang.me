import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import blog from './modules/blog'

Vue.use(Vuex)

export default window.store = new Vuex.Store({
  modules: {
    login,
    blog
  }
})
