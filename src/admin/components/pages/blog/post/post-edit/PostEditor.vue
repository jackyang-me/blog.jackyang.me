<template>
  <div class="c-postEditor">
    <input type="text" class="u-textField--block c-postEditor__title" placeholder="post title">
    <mardown-editor class="c-postEditor__markdown" @change="handleEditorChange"></markdown-editor>
  </div>
</template>

<script>
  import _ from 'lodash'
  import MardownEditor from 'components/common/MardownEditor.vue'

  export default {
    components: {
      'mardown-editor': MardownEditor
    },

    methods: {
      handleEditorChange: _.debounce(function (value) {
        console.log('editor change', value)
      }, 300)
    }
  }
</script>
