import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/blog',
  name: 'blog',
  component: require('components/pages/blog/Blog.vue'),
  children: [{
    path: 'post',
    component: require('components/pages/blog/post/post-list/PostListMain.vue')
  }, {
    path: 'post/edit/:postId',
    component: require('components/pages/blog/post/post-edit/PostEditMain.vue')
  }, {
    path: 'post/new',
    component: require('components/pages/blog/post/post-edit/PostEditMain.vue')
  }]
}];

const router = new VueRouter({routes})

export default router
