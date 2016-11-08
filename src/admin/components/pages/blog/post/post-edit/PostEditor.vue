<template>
  <div class="c-postEditor">
    <input type="text" class="u-textField--block c-postEditor__title" placeholder="post title" :value="localTitle" @input="handleInputTitle">
    <markdown-field class="c-postEditor__markdown" :value="localContent" @change="handlePostChange"></markdown-field>
    <!--<markdown-field label="except" @change="handleExceptChange"></markdown-field>-->
  </div>
</template>

<script>
  import _ from 'lodash'
  import MarkdownField from 'components/common/form/MarkdownField.vue'

  export default {
    components: {
      'markdown-field': MarkdownField
    },

    props: {
      title: String,
      content: String
    },

    data () {
      return {
        localTitle: this.title,
        localContent: this.content
      }
    },

    watch: {
      title (value) {
        this.localTitle = value
      },
      localTitle (value) {
        this.$emit('changetitle', value)
      },
      content (value) {
        this.localContent = value
      },
      localContent (value) {
        this.$emit('changecontent', value)
      }
    },

    methods: {
      handleInputTitle (e) {
        this.localTitle = e.target.value
      },
      handlePostChange: _.debounce(function (value) {
        this.localContent = value
      }, 300),
      handleExceptChange: _.debounce(function (value) {
      }, 300)
    }
  }
</script>
