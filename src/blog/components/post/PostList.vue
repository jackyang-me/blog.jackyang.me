<template>
  <div class="postList">
    <post-item v-for="post in postList"
              :post-id="post.objectId"
              :title="post.title"
              :subtitle="post.subtitle"
              :small-cover-image="post.smallCoverImage"
              :cover-image="post.coverImage"
              :date="post.releasedAt"></post-item>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';
  import PostItem from './PostItem.vue';

  export default {
    components: {
      'post-item': PostItem
    },

    computed: {
      ...mapGetters([
        'postList'
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
        'getPostList'
      ]),
      fetchData () {
        let pageIndex = this.$route.params.pageIndex;
        this.getPostList(pageIndex);
      }
    }
  }
</script>
