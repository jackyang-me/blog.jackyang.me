import Vue from 'vue';
import Vuex from 'vuex';
import postList from './modules/post-list';
import postEditor from './modules/post-editor';

Vue.use(Vuex);

export default window.store = new Vuex.Store({
  modules: {
    postList: postList,
    postEditor: postEditor
  }
});
