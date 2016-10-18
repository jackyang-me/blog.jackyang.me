<template>
  <div class="postEditor">
    <title-editor></title-editor>
    <tags-editor></tags-editor>
    <content-editor></content-editor>
  </div>
</template>

<script>
  import TitleEditor from './TitleEditor.vue';
  import TagsEditor from './TagsEditor.vue';
  import ContentEditor from './ContentEditor.vue';

  export default {
    components: {
      'title-editor': TitleEditor,
      'tags-editor': TagsEditor,
      'content-editor': ContentEditor
    }
  };
</script>
