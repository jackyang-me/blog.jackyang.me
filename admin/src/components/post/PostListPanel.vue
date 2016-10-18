<template>
  <div class="postListPanel">
    <div class="postListPanel__top">
      <h1 class="postListPanel__header">POSTS</h1>
      <div class="postListPanel__total">23 posts</div>
    </div>
    <div class="postListPanel__listContainer">
      <post-list></post-list>
    </div>
  </div>
</template>

<script>
  import PostList from './PostList.vue';

  export default {
    components: {
      'post-list': PostList
    }
  };
</script>
