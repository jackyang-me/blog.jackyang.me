<template>
  <main class="postMain">
    <post-list-panel></post-list-panel>
    <post-details-panel></post-details-panel>
  </main>
</template>

<script>
  import PostListPanel from './PostListPanel.vue';
  import PostDetailsPanel from './PostDetailsPanel.vue';

  export default {
    components: {
      'post-list-panel': PostListPanel,
      'post-details-panel': PostDetailsPanel
    }
  };
</script>
