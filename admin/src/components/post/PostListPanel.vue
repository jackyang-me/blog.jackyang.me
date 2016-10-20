<template>
  <div class="postListPanel">
    <div class="postListPanel__top">
      <h1 class="postListPanel__header">POSTS</h1>
      <div class="postListPanel__total">{{postList.length}} posts</div>
    </div>
    <div class="postListPanel__listContainer">
      <post-list :post-list="postList" :selected-post-id="selectedPostId"></post-list>
    </div>
  </div>
</template>

<script>
  import PostList from './PostList.vue';

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
      'post-list': PostList
    }
  };
</script>
