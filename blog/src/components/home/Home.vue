<template>
  <div class="home">
    <nav-bar></nav-bar>
    <post-list></post-list>
  </div>
</template>

<script>
  import NavBar from 'components/nav/Nav.vue';
  import PostList from 'components/post/PostList.vue';

  export default {
    components: {
      'nav-bar': NavBar,
      'post-list': PostList
    }
  }
</script>
