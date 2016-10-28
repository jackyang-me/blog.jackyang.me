import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
  path: '/blog',
  redirect: '/blog/1'
}, {
  path: '/',
  name: 'home',
  redirect: '/blog/1',
  component: require('components/home/Home.vue'),
  children: [{
    path: 'blog/:pageIndex',
    component: require('components/post/PostList.vue')
  }, {
    path: 'picture',
    component: require('components/picture/Picture.vue')
  }, {
    path: 'about',
    component: require('components/about/About.vue')
  }]
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
  component: require('components/post/Post.vue')
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
