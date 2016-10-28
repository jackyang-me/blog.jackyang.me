import 'whatwg-fetch';
import Vue from 'vue';
import VueTouch from 'vue-touch';
import App from './App.vue';
import router from './router';
import store from './vuex/store';

Vue.use(VueTouch);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
