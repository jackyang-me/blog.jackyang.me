import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/login',
  name: 'login',
  component: resolve => {
    require.ensure(['components/login/Login.vue'], () => {
      resolve(require('components/login/Login.vue'))
    }, 'login')
  }
}, {
  path: '/home',
  name: 'home',
  component: require('components/pages/Home.vue'),
  children: [{
    path: 'blog',
    component: require('components/post/PostMain.vue')
  }, {
    path: 'picture',
    component: ''
  }]
}, {
  path: '/upload',
  name: 'upload',
  component: require('components/pages/Upload.vue')
}];

const router = new VueRouter({routes})

export default router
