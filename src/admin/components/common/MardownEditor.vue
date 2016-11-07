<template>
  <div>
    <textarea ref:textarea></textarea>
  </div>
</template>

<script>
  import SimpleMDE from 'simplemde'
  let editor;

  export default {
    mounted () {
      editor = new SimpleMDE({element: this.$refs.textarea})
    }
  }
</script>
