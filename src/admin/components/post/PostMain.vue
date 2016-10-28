<template>
  <main class="postMain">
    <post-list-panel :post-list="postList"
                     :selected-post-id="selectedPostId"></post-list-panel>
    <post-details-panel v-if="selectedPost"
                        :post="selectedPost"></post-details-panel>
  </main>
</template>

<script>
  import { mapActions } from 'vuex';
  import PostListPanel from './PostListPanel.vue';
  import PostDetailsPanel from './PostDetailsPanel.vue';

  export default {
    components: {
      'post-list-panel': PostListPanel,
      'post-details-panel': PostDetailsPanel
    },

    computed: {
      postList () {
        return this.$store.state.postList.postList;
      },
      selectedPostId () {
        return this.$store.state.postList.selectedPostId;
      },
      selectedPost () {
        return this.postList.filter(post => post.objectId === this.selectedPostId)[0];
      }
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
        this.getPostList(1);
      }
    }
  };
</script>
