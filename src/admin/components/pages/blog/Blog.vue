<template>
  <div>
    <page-header :title="title" :nav-items="navItems"></page-header>
    <page-main></page-main>
    <page-footer></page-footer>
    <!-- modals -->
    <image-selector-modal :show="isImageSelectorModalShow" @close="handleImageSelectorClose" @ok="handleImageSelectorOK"></image-selector-modal>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
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

    computed: {
      ...mapState({
        isImageSelectorModalShow: state => state.blog.post.postEdit.isImageSelectorModalShow,
        onImageSelectorModalOK: state => state.blog.post.postEdit.onImageSelectorModalOK,
        onImageSelectorModalCancel: state => state.blog.post.postEdit.onImageSelectorModalCancel
      })
    },

    methods: {
      handleImageSelectorClose () {
        this.onImageSelectorModalCancel && this.onImageSelectorModalCancel()
      },
      handleImageSelectorOK (data) {
        this.onImageSelectorModalOK && this.onImageSelectorModalOK(data)
      }
    }
  }
</script>
