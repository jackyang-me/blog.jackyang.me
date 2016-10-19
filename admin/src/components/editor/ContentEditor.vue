<template>
  <div class="contentEditor">
    <textarea class="contentEditor__textarea" :value="input" @input="update"></textarea>
    <div class="contentEditor__preview">
      <div v-html="compiledMarkdown" class="markdown-body"></div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash';
  import marked from 'marked';

  export default {
    data () {
      return {
        input: ''
      }
    },

    computed: {
      compiledMarkdown: function () {
        return marked(this.input, { sanitize: true })
      }
    },

    methods: {
      update: _.debounce(function (e) {
        this.input = e.target.value;
      }, 300)
    }
  };
</script>
