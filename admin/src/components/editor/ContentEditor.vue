<template>
  <div class="contentEditor">
    <textarea class="contentEditor__textarea" :value="content" @input="update"></textarea>
    <div class="contentEditor__preview">
      <div v-html="compiledMarkdown" class="markdown-body"></div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';
  import marked from 'marked';

  export default {
    props: {
      content: {
        type: String,
        default: ''
      },
      inputHandler: {
        type: Function,
        default: null
      }
    },

    computed: {
      compiledMarkdown: function () {
        return marked(this.content, { sanitize: true })
      }
    },

    methods: {
      update: _.debounce(function (e) {
        this.inputHandler && this.inputHandler(e.target.value);
      }, 300)
    }
  };
</script>
