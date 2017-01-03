<template>
  <div class="c-postEditMain">
    <post-edit-toolbar @clicksave="handleClickSave" @clickclose="handleClickClose"></post-edit-toolbar>
    <div class="l-view" v-if="postDetails">
      <div class="l-view__content">
        <post-editor :content="postDetails.content"
                     :title="postDetails.title"
                     @changetitle="changePostTitle"
                     @changecontent="handleChangeContent"></post-editor>
      </div>
      <div class="l-view__sidebar">
        <post-settings :cover-image="postDetails.coverImage"
                       :status="postDetails.status"
                       :tags="postDetails.tags"
                       @changecover="changePostCover"
                       @changestatus="changePostStatus"
                       @changetags="changePostTags"
                       @deletepost="handleDeletePost"></post-settings>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import PostEditToolbar from './PostEditToolbar.vue'
  import PostEditor from './PostEditor.vue'
  import PostSettings from './PostSettings.vue'
  import KeepInTouch from 'keep-in-touch'

  export default {
    components: {
      'post-edit-toolbar': PostEditToolbar,
      'post-editor': PostEditor,
      'post-settings': PostSettings
    },

    kt: null,

    created () {
      this.fetchData()
      this.initKT()
    },

    destroyed () {
      this.$options.kt.stop()
    },

    computed: {
      ...mapState({
        postDetails: state => state.blog.post.postEdit.postDetails || {}
      })
    },

    watch: {
      $route: 'fetchData'
    },

    methods: {
      ...mapActions([
        'getPostList',
        'getPostDetails',
        'changePostTitle',
        'changePostContent',
        'changePostCover',
        'changePostStatus',
        'changePostTags',
        'savePostDetails',
        'createDummyPost',
        'deletePost'
      ]),
      fetchData () {
        if (this.$route.name === 'newPost') {
          this.createDummyPost()
        } else {
          this.getPostDetails(this.$route.params.postId)
        }
      },
      initKT () {
        // auto save after stopping input for 2s
        this.$options.kt = new KeepInTouch({lostInterval: 2000})
        this.$options.kt.lost(() => {
          if (!this.postDetails.content) {
            return
          } else {
            this.savePostDetails(this.postDetails)
          }
        })
      },
      handleChangeContent (content) {
        this.changePostContent(content)
        this.$options.kt.touch()
      },
      handleClickSave () {
        this.savePostDetails(this.postDetails)
      },
      handleClickClose () {
        this.goBack()
      },
      handleDeletePost () {
        let chooice = confirm('Are you sure to delete this post?')
        if (chooice) {
          this.deletePost(this.$route.params.postId)
          this.goBack()
        }
      },
      goBack () {
        this.getPostList()
        this.$router.go(-1)
      }
    }
  }
</script>
