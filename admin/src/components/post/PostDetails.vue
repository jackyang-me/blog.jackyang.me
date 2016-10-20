<template>
  <div class="postDetails">
    <post-editor :post="post"></post-editor>
  </div>
</template>

<script>
  import PostEditor from 'components/editor/PostEditor.vue';

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
      'post-editor': PostEditor
    }
  };
</script>
