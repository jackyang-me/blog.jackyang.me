<template>
  <div class="postList">
    <post-list-item></post-list-item>
    <post-list-item></post-list-item>
    <post-list-item class="is-selected"></post-list-item>
    <post-list-item></post-list-item>
    <post-list-item></post-list-item>
    <post-list-item></post-list-item>
    <post-list-item></post-list-item>
    <post-list-item></post-list-item>
    <post-list-item></post-list-item>
    <post-list-item></post-list-item>
    <post-list-item></post-list-item>
    <post-list-item></post-list-item>
    <post-list-item></post-list-item>
    <post-list-item></post-list-item>
  </div>
</template>

<script>
  import PostListItem from './PostListItem.vue';

  export default {
    components: {
      'post-list-item': PostListItem
    }
  };
</script>
