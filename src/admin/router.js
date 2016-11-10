import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  name: 'login',
  component: require('components/pages/login/Login.vue')
}, {
  path: '/blog',
  name: 'blog',
  component: require('components/pages/blog/Blog.vue'),
  children: [{
    path: 'post',
    name: 'postList',
    component: require('components/pages/blog/post/post-list/PostListMain.vue')
  }, {
    path: 'post/edit/:postId',
    name: 'editPost',
    component: require('components/pages/blog/post/post-edit/PostEditMain.vue')
  }, {
    path: 'post/new',
    name: 'newPost',
    component: require('components/pages/blog/post/post-edit/PostEditMain.vue')
  }]
}];

const router = new VueRouter({routes})

export default router
