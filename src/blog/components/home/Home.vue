<template>
  <div class="home">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from 'components/nav/Nav.vue';

  export default {
    components: {
      'nav-bar': NavBar
    }
  }
</script>
