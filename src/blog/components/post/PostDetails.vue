<template>
  <div class="postDetails">
    <header>
      <h1 class="postDetails__title">{{title}}</h1>
      <h2 v-if="subtitle" class="postDetails__subtitle">{{subtitle}}</h2>
    </header>
    <div class="postDetails__time">{{releasedAt | MMM_D_YYYY}}</div>
    <article class="postDetails__article markdown-body" v-html="compiledContent"></article>
  </div>
</template>

<script>
  import {
    markdown as markdownFilter,
    MMM_D_YYYY
   } from 'filters/filters';
  import marked from 'marked';

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      subtitle: {
        type: String,
        default: ''
      },
      content: { // markdown string
        type: String,
        default: ''
      },
      readCount: {
        type: Number,
        default: 0
      },
      releasedAt: {
        type: Date
      },
      lastUpdatedAt: {
        type: Date
      }
    },

    computed: {
      compiledContent () {
        if (this.content) {
            return marked(this.content || '', {sanitize: true});
        } else {
          return '';
        }
      }
    },

    filters: {
      MMM_D_YYYY
    }
  }
</script>
