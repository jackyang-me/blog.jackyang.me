import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
  path: '/login',
  component: resolve => {
    require.ensure(['components/login/Login.vue'], () => {
      resolve(require('components/login/Login.vue'));
    }, 'login');
  }
}];

const router = new VueRouter({routes});

export default router;
