<template>
  <div class="u-formControl">
    <label v-if="label">{{label}}</label>
    <markdown-editor :value="value" @change="handleChange"></markdown-editor>
  </div>
</template>

<script>
  import MarkdownEditor from 'components/common/MarkdownEditor.vue'

  export default {
    components: {
      'markdown-editor': MarkdownEditor
    },

    props: {
      label: String,
      value: String
    },

    methods: {
      handleChange (value) {
        this.$emit('change', value)
      }
    }
  }
</script>
