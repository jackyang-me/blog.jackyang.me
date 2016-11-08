<template>
  <div class="c-postEditor">
    <input type="text" class="u-textField--block c-postEditor__title" placeholder="post title" v-model="localTitle">
    <markdown-field class="c-postEditor__markdown" @change="handlePostChange"></markdown-field>
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
        localTitle: this.title
      }
    },

    watch: {
      title (value) {
        this.localTitle = value
      },
      localTitle (value) {

      }
    },

    methods: {
      handlePostChange: _.debounce(function (value) {
        console.log('editor change', value)
      }, 300),
      handleExceptChange: _.debounce(function (value) {
        console.log('except change', value)
      }, 300)
    }
  }
</script>
