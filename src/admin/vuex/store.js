import Vue from 'vue'
import Vuex from 'vuex'
import blog from './modules/blog'

Vue.use(Vuex)

export default window.store = new Vuex.Store({
  modules: {
    blog
  }
})
