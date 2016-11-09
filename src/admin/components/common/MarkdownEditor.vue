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

    data () {
      return {
        localValue: this.value
      }
    },

    mounted () {
      this.initEditor()
    },

    destroyed () {
      this.$options.editor = null
    },

    watch: {
      value (value) {
        // can't make the editor always reactive to props.value, only make editor recieve the init value from props (no empty value)
        // cause editor.value(props.value) will make user losts his editing focus
        if (value && !this.localValue) {
          this.localValue = value
          this.$options.editor && this.$options.editor.value(value)
        }
      },
      localValue (value) {
        this.$emit('change', value)
      }
    },

    methods: {
      initEditor () {
        let editor = null
        let that = this

        editor = this.$options.editor = new SimpleMDE({
          element: this.$refs.textarea,
          previewRender (plainText, preview) {
            preview.classList.add('markdown-body')
            return marked(plainText)
          },
          toolbar: [{
            name: 'bold',
            className: 'fa fa-bold',
            title: 'Bold',
            action: SimpleMDE.toggleBold
          }, {
            name: 'italic',
            className: 'fa fa-italic',
            title: 'Italic',
            action: SimpleMDE.toggleItalic
          }, {
            name: 'heading',
            className: 'fa fa-header',
            title: 'Heading',
            action: SimpleMDE.toggleHeadingSmaller
          }, {
            name: 'strikethrough',
            className: 'fa fa-strikethrough',
            title: 'Strikethrough',
            action: SimpleMDE.toggleStrikethrough
          },
          '|', {
            name: 'quote',
            className: 'fa fa-quote-left',
            title: 'Quote',
            action: SimpleMDE.toggleBlockquote
          }, {
            name: 'unordered-list',
            className: 'fa fa-list-ul',
            title: 'Generic List',
            action: SimpleMDE.toggleUnorderedList
          }, {
            name: 'ordered-list',
            className: 'fa fa-list-ol',
            title: 'Numbered List',
            action: SimpleMDE.toggleOrderedList
          }, {
            name: 'table',
            className: 'fa fa-table',
            title: 'Insert Table',
            action: SimpleMDE.drawTable
          },
          '|', {
            name: 'link',
            className: 'fa fa-link',
            title: 'Create Link',
            action: SimpleMDE.drawLink
          }, {
            name: 'image',
            className: 'fa fa-picture-o',
            title: 'Insert Image',
            action (editor) {
              that.handleInsertImage(editor)
            }
          },
          '|', {
            name: 'preview',
            className: 'fa fa-eye no-disable',
            title: 'Toggle Preview',
            action: SimpleMDE.togglePreview
          }, {
            name: 'side-by-side',
            className: 'fa fa-columns no-disable no-mobile',
            title: 'Toggle Side by Side',
            action: SimpleMDE.toggleSideBySide
          }, {
            name: 'fullscreen',
            className: 'fa fa-arrows-alt no-disable no-mobile',
            title: 'Toggle Fullscreen',
            action: SimpleMDE.toggleFullScreen
          }]
        })

        editor.codemirror.on('change', () => {
          this.localValue = editor.value()
        })

        editor.value(this.localValue)
      },
      handleInsertImage (editor) {
        let cm = editor.codemirror
        cm.replaceSelection('![](http://)')
        cm.focus()
      }
    }
  }
</script>
