<template>
  <div class="postDetails">
    <post-editor></post-editor>
  </div>
</template>

<script>
  import PostEditor from 'components/editor/PostEditor.vue';

  export default {
    components: {
      'post-editor': PostEditor
    }
  };
</script>
