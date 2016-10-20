<template>
  <div class="postDetailsPanel">
    <post-toolbar></post-toolbar>
    <post-details :post="post"></post-details>
  </div>
</template>

<script>
  import PostDetails from './PostDetails.vue';
  import PostToolbar from './PostToolbar.vue';

  export default {
    props: {
      post: {
        type: Object,
        default () {
          return {};
        }
      }
    },
    
    components: {
      'post-toolbar': PostToolbar,
      'post-details': PostDetails
    }
  };
</script>
