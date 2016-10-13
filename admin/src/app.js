import 'whatwg-fetch';
import Vue from 'vue';
import VueTouch from 'vue-touch';
import App from './App.vue';
import router from './router';

Vue.use(VueTouch);

/* eslint-disable no-new */
new Vue({
  el: 'body',
  router,
  render: h => h(App)
});
