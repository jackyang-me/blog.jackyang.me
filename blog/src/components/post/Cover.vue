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
    <!--<img class="postCover__image" :src="image">-->
    <vue-img-loader :src="image" transition="fade" background-color="lightgrey"></vue-img-loader>
  </div>
</template>

<script>
  import { VueImgLoader } from 'vue-img-loader';

  export default {
    components: {
      'vue-img-loader': VueImgLoader
    },

    props: {
      smallImage: {
        type: String,
        default: ''
      },
      image: {
        type: String,
        default: ''
      }
    }
  };
</script>
