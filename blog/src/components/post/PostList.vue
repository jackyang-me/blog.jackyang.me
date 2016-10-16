<template>
  <div class="postList">
    <post-item v-for="post in postList"
              :post-id="post.id"
              :title="post.title"
              :subtitle="post.subtitle"
              :small-cover-image="post.smallCoverImage"
              :cover-image="post.coverImage"
              :date="post.releasedAt"></post-item>
  </div>
</template>

<script>
  import PostItem from './PostItem.vue';

  export default {
    components: {
      'post-item': PostItem
    },

    props: {
      postList: {
        type: Array,
        default: function () {
          return [{
            id: '123',
            title: 'test title',
            subtitle: 'test subtitle',
            date: new Date(),
            coverImage: 'dsd'
          }, {
            id: '123',
            title: 'test title',
            subtitle: 'test subtitle',
            date: new Date(),
            coverImage: 'dsd'
          }];
        }
      }
    }
  }
</script>
