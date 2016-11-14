<template>
  <div class="postItem card">
    <div class="postItem__time">{{date | iso | ago}}</div>
    <div class="postItem__cover--leading" v-if="coverImage" v-touch:tap="goToPostDetails">
      <vue-img-loader :src="coverImage" :preview="smallCoverImage"></vue-img-loader>
    </div>
    <h3 class="postItem__title--after" v-touch:tap="goToPostDetails">{{title}}</h3>
    <h4 class="postItem__subtitle" v-if="subtitle" v-touch:tap="goToPostDetails">{{subtitle}}</h4>
  </div>
</template>

<script>
  import { iso, ago, qiniuTinyImage } from 'filters/filters'
  import { VueImgLoader } from 'vue-img-loader'

  export default {
    components: {
      'vue-img-loader': VueImgLoader
    },

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
      coverImage: {
        type: String,
        default: ''
      },
      date: {
        type: [Object, Date]
      }
    },

    computed: {
      smallCoverImage () {
        return qiniuTinyImage(this.coverImage)
      }
    },

    filters: {
      iso,
      ago
    },

    methods: {
      goToPostDetails: function () {
        this.$router.push({name: 'post-details', params: {id: this.postId}});
      }
    }
  }
</script>
