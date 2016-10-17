<template>
  <div class="post">
    <post-cover v-if="postDetails"
                image="https://d13yacurqjgara.cloudfront.net/users/31752/screenshots/1458877/events_blog.jpg"></post-cover>
    <post-details v-if="postDetails"
                  :title="postDetails.title"
                  :subtitle="postDetails.subtitle"
                  :content="postDetails.content"></post-details>
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
        'getPostDetails'
      ]),
      fetchData () {
        let postId = this.$route.params.id;
        this.getPostDetails(postId);
      }
    }
  };
</script>
