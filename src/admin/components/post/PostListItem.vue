<template>
  <div :class="{'postListItem': true, 'is-selected': selected}">
    <div class="postListItem__inner">
      <h2 class="postListItem__title">
        <span v-if="post.status === 'draft'" style="color:lightcoral">[DRAFT]</span>{{post.title}}
      </h2>
      <h4 class="postListItem__time" v-if="post.releasedAt">{{new Date(post.releasedAt.iso) | agoFilter}}</h4>
      <div class="postListItem__cover"></div>
    </div>
  </div>
</template>

<script>
  import { ago as agoFilter } from 'filters/filters';

  export default {
    props: {
      post: {
        type: Object,
        default: () => {
          return {};
        }
      },
      selected: {
        type: Boolean,
        default: false
      }
    },

    filters: {
      agoFilter
    }
  };
</script>
