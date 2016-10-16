import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
  path: '/home',
  name: 'home',
  component: require('components/home/Home.vue')
  /*
  component: resolve => {
    require.ensure(['components/post/PostList.vue'], () => {
      resolve(require('components/post/PostList.vue'));
    }, 'post-list');
  }
  */
}, {
  path: '/post/:id',
  name: 'post-details',
  component: require('components/post/PostDetails.vue')
  /*
  component: resolve => {
    require.ensure(['components/post/PostDetails.vue'], () => {
      resolve(require('components/post/PostDetails.vue'));
    }, 'post-details');
  }
  */
}];

const router = new VueRouter({routes});

export default router;
