<template>
  <div class="postDetailsPanel">
    <post-toolbar></post-toolbar>
    <post-details></post-details>
  </div>
</template>

<script>
  import PostDetails from './PostDetails.vue';
  import PostToolbar from './PostToolbar.vue';

  export default {
    components: {
      'post-toolbar': PostToolbar,
      'post-details': PostDetails
    }
  };
</script>
