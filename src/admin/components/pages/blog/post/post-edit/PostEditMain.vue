<template>
  <div class="c-postEditMain">
    <post-edit-toolbar @clicksave="handleClickSave" @clickclose="handleClickClose"></post-edit-toolbar>
    <div class="l-view">
      <div class="l-view__content">
        <post-editor :content="postDetails.content"
                     :title="postDetails.title"
                     @changetitle="changePostTitle"
                     @changecontent="changePostContent"></post-editor>
      </div>
      <div class="l-view__sidebar">
        <post-settings :cover-image="postDetails.coverImage"
                       :status="postDetails.status"
                       :tags="postDetails.tags"
                       @changecover="changePostCover"
                       @changestatus="changePostStatus"
                       @changetags="changePostTags"></post-settings>
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
        postDetails: state => state.blog.post.postEdit.postDetails || {}
      })
    },

    watch: {
      '$route': 'fetchData'
    },

    methods: {
      ...mapActions([
        'getPostDetails',
        'changePostTitle',
        'changePostContent',
        'changePostCover',
        'changePostStatus',
        'changePostTags',
        'savePostDetails',
        'createDummyPost'
      ]),
      fetchData () {
        if (this.$route.name === 'newPost') {
          this.createDummyPost()
        } else {
          this.getPostDetails(this.$route.params.postId)
        }
      },
      handleClickSave () {
        this.savePostDetails(this.postDetails)
      },
      handleClickClose () {
        this.$router.go(-1)
      }
    }
  }
</script>
