<template>
  <div class="postDetailsPanel">
    <post-details></post-details>
  </div>
</template>

<script>
  import PostDetails from './PostDetails.vue';

  export default {
    components: {
      'post-details': PostDetails
    }
  };
</script>
