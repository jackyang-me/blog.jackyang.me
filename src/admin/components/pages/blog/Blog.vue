<template>
  <div>
    <page-header :title="title" :nav-items="navItems"></page-header>
    <page-main></page-main>
    <page-footer></page-footer>
    <image-selector-modal :show="true" @close="handleImageSelectorClose" @ok="handleImageSelectorOK"></image-selector-modal>
  </div>
</template>

<script>
  import PageHeader from 'components/common/PageHeader.vue'
  import PageMain from 'components/common/PageMain.vue'
  import PageFooter from 'components/common/PageFooter.vue'
  import ImageSelectorModal from 'components/modals/ImageSelectorModal.vue'

  export default {
    components: {
      'page-header': PageHeader,
      'page-main': PageMain,
      'page-footer': PageFooter,
      'image-selector-modal': ImageSelectorModal
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
    },

    methods: {
      handleImageSelectorClose () {

      },
      handleImageSelectorOK (data) {

      }
    }
  }
</script>
