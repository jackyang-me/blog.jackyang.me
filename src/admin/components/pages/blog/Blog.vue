<template>
  <div>
    <page-header :title="title" :nav-items="navItems"></page-header>
    <page-main></page-main>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from 'components/common/PageHeader.vue'
  import PageMain from 'components/common/PageMain.vue'
  import PageFooter from 'components/common/PageFooter.vue'

  export default {
    components: {
      'page-header': PageHeader,
      'page-main': PageMain,
      'page-footer': PageFooter
    },

    data () {
      return {
        title: 'Blog',
        navItems: [{
          label: 'POSTS',
          link: '/blog/post',
          active: true
        }, {
          label: 'COMMENTS',
          link: '/blog/comment'
        }, {
          label: 'SETTINGS',
          link: '/blog/settings'
        }]
      }
    }
  }
</script>
