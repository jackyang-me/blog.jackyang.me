<template>
  <div class="postDetailsPanel">
    <post-toolbar :post="post"
                  :save-handler="saveHandler"
                  :update-handler="updateHandler"
                  :publish-handler="publishHandler"
                  :delete-handler="deleteHandler"></post-toolbar>
    <post-details :post="post"></post-details>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import PostDetails from './PostDetails.vue';
  import PostToolbar from './PostToolbar.vue';

  export default {
    props: {
      post: {
        type: Object,
        default () {
          return {};
        }
      }
    },

    components: {
      'post-toolbar': PostToolbar,
      'post-details': PostDetails
    },

    computed: {
      ...mapGetters([
        'selectedPostDetails'
      ])
    },

    methods: {
      ...mapActions([
        'saveDraft',
        'updatePost',
        'publishPost',
        'deletePost'
      ]),
      deleteHandler (post) {
        this.deletePost(post.objectId);
      },
      saveHandler (post) { // status = draft, no status change, will update tags, title, and content
        this.saveDraft(post);
      },
      publishHandler (post) { // draft => released, status change, will update status, tags, title, and content
        this.publishPost(post);
      },
      updateHandler (post) { // status = released, no status change, will update tags, title and content
        this.updatePost(post);
      }
    }
  };
</script>
