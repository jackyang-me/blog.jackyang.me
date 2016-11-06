<template>
  <header class="c-pageHeader">
    <toolbar :title="title" class="c-pageHeader__toolbar"></toolbar>
    <navbar :nav-items="navItems" class="c-pageHeader__navbar"></navbar>
  </header>
</template>

<script>
  import Toolbar from './toolbar/Toolbar.vue'
  import Navbar from './navbar/Navbar.vue'

  export default {
    components: {
      'toolbar': Toolbar,
      'navbar': Navbar
    },

    props: {
      title: {
        type: String,
        default: ''
      },
      navItems: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>
