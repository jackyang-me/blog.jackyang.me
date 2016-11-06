<template>
  <div class="c-postEditor">
    <input type="text" class="u-textField--block c-postEditor__title" placeholder="post title">
    <mardown-editor class="c-postEditor__markdown"></markdown-editor>
  </div>
</template>

<script>
  import MardownEditor from 'components/common/MardownEditor.vue'

  export default {
    components: {
      'mardown-editor': MardownEditor
    }
  }
</script>
