<template>
  <div class="c-postEditMain">
    <post-edit-toolbar></post-edit-toolbar>
    <div class="l-view">
      <div class="l-view__content">
        <post-editor></post-editor>
      </div>
      <div class="l-view__sidebar">
        <post-settings></post-settings>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import PostEditToolbar from './PostEditToolbar.vue'
  import PostEditor from './PostEditor.vue'
  import PostSettings from './PostSettings.vue'

  export default {
    components: {
      'post-edit-toolbar': PostEditToolbar,
      'post-editor': PostEditor,
      'post-settings': PostSettings
    },

    created () {
      this.fetchData()
    },

    computed: {
      ...mapState({
        postDetails: state => state.blog.post.postEdit.postDetails
      })
    },

    watch: {
      '$route': 'fetchData'
    },

    methods: {
      ...mapActions([
        'getPostDetails'
      ]),
      fetchData () {
        this.getPostDetails(this.$route.params.postId)
      }
    }
  }
</script>
