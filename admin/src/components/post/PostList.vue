<template>
  <div class="postList">
    <post-list-item
      v-for="post in postList"
      :post="post"
      :selected="selectedPostId === post.objectId"
      @click.native="handleTap(post.objectId)"></post-list-item>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import PostListItem from './PostListItem.vue';

  export default {
    props: {
      postList: {
        type: Array,
        default: () => {
          return [];
        }
      },
      selectedPostId: {
        type: String,
        default: ''
      }
    },

    components: {
      'post-list-item': PostListItem
    },

    methods: {
      ...mapActions([
        'selectPost'
      ]),
      handleTap: function (id) {
        this.selectPost(id);
      }
    }
  };
</script>
