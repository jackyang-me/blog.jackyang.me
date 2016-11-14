<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>

<template>
  <div class="postCover">
    <div class="postCover__mask"></div>
    <vue-img-loader :src="image" :preview="smallImage" transition="fade" background-color="lightgrey" width="700" height="400"></vue-img-loader>
  </div>
</template>

<script>
  import { qiniuTinyImage } from 'filters/filters'
  import { VueImgLoader } from 'vue-img-loader';

  export default {
    components: {
      'vue-img-loader': VueImgLoader
    },

    props: {
      image: {
        type: String,
        default: ''
      }
    },

    computed: {
      smallImage () {
        return qiniuTinyImage(this.image)
      }
    }
  };
</script>
