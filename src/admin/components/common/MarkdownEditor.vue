<template>
  <div>
    <textarea ref="textarea"></textarea>
  </div>
</template>

<script>
  import SimpleMDE from 'simplemde'
  import marked from 'marked'

  export default {
    editor: null,

    props: {
      value: String
    },

    mounted () {
      let editor = this.$options.editor

      editor = new SimpleMDE({
        element: this.$refs.textarea,
        previewRender (plainText, preview) {
          preview.classList.add('markdown-body')
          return marked(plainText)
        }
      })

      editor.codemirror.on('change', () => {
        this.$emit('change', editor.value())
      })

      editor.value(this.value)
    },

    destroyed () {
      this.$options.editor = null
    }
  }
</script>
