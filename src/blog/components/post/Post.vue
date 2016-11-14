<template>
  <div class="post">
    <post-cover v-if="postDetails && postDetails.coverImage"
                :image="postDetails.coverImage"></post-cover>
    <post-details v-if="postDetails"
                  :title="postDetails.title"
                  :subtitle="postDetails.subtitle"
                  :content="postDetails.content"
                  :releasedAt="new Date(postDetails.releasedAt.iso)"></post-details>
    <!--<post-comments></post-comments>-->
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';
  import PostCover from './Cover.vue';
  import PostDetails from './PostDetails';

  export default {
    components: {
      'post-cover': PostCover,
      'post-details': PostDetails
    },

    computed: {
      ...mapGetters([
        'postDetails'
      ])
    },

    watch: {
      '$route': 'fetchData'
    },

    created () {
      this.fetchData();
    },

    methods: {
      ...mapActions([
        'getPostDetails',
        'clearPostDetails'
      ]),
      fetchData () {
        let postId = this.$route.params.id;
        this.getPostDetails(postId);
      }
    },

    beforeRouteLeave (to, from, next) {
      this.clearPostDetails();
      next();
    }
  };
</script>
