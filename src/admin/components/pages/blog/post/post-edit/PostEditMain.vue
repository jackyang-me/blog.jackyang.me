<template>
  <div class="c-postEditMain">
    <post-edit-toolbar></post-edit-toolbar>
    <div class="l-view">
      <div class="l-view__content">
        <post-editor></post-editor>
      </div>
      <div class="l-view__sidebar">
        <post-settings></post-settings>
      </div>
    </div>
  </div>
</template>

<script>
  import PostEditToolbar from './PostEditToolbar.vue'
  import PostEditor from './PostEditor.vue'
  import PostSettings from './PostSettings.vue'

  export default {
    components: {
      'post-edit-toolbar': PostEditToolbar,
      'post-editor': PostEditor,
      'post-settings': PostSettings
    }
  }
</script>
