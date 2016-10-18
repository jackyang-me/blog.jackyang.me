<template>
  <div class="home">
    <section class="homeSide">
      <side-bar></side-bar>
    </section>
    <section class="homeMain">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
  import 'sass/pages/home/_home.scss';
  import SideBar from 'components/side-bar/SideBar.vue';

  export default {
    components: {
      'side-bar': SideBar
    }
  };
</script>
