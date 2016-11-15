<style>
  .c-home__background {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
</style>

<template>
  <div class="home">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <!--<div class="c-home__background">
      <vue-img-loader :src="background" :preview="preview" blur-radius="10" transition="tran-fade"></vue-img-loader>
    </div>-->
  </div>
</template>

<script>
  import NavBar from 'components/nav/Nav.vue'
  import { VueImgLoader } from 'vue-img-loader'
  import { qiniuTinyImage } from 'filters/filters'

  export default {
    components: {
      'nav-bar': NavBar,
      'vue-img-loader': VueImgLoader
    },

    data () {
      return {
        background: 'http://ogm89ro58.bkt.clouddn.com/image/wuhan_003.jpg'
      }
    },

    computed: {
      preview () {
        return qiniuTinyImage(this.background)
      }
    }
  }
</script>
