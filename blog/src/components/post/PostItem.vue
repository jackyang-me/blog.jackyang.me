<template>
  <div class="postItem card">
    <div class="postItem__time">{{date | agoFilter}}</div>
    <div class="postItem__cover--leading" v-if="coverImage" v-touch:tap="goToPostDetails">
      <img :src="coverImage" alt="">
    </div>
    <h3 class="postItem__title--after" v-touch:tap="goToPostDetails">{{title}}</h3>
    <h4 class="postItem__subtitle" v-if="subtitle" v-touch:tap="goToPostDetails">{{subtitle}}</h4>
  </div>
</template>

<script>
  import { ago as agoFilter } from 'filters/filters';

  export default {
    props: {
      postId: {
        type: String,
        default: '',
        required: true
      },
      title: {
        type: String,
        default: '',
        required: true
      },
      subtitle: {
        type: String,
        default: ''
      },
      smallCoverImage: {
        type: String,
        default: ''
      },
      coverImage: {
        type: String,
        default: ''
      },
      date: {
        type: Date
      }
    },

    filters: {
      agoFilter
    },

    methods: {
      goToPostDetails: function () {
        this.$router.push({name: 'post-details', params: {id: this.postId}});
      }
    }
  }
</script>
