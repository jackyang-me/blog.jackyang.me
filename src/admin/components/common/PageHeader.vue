<template>
  <header class="c-pageHeader">
    <toolbar :title="title" class="c-pageHeader__toolbar" :actions="actions"></toolbar>
    <navbar :nav-items="navItems" class="c-pageHeader__navbar"></navbar>
  </header>
</template>

<script>
  import { mapActions } from 'vuex'
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
    },

    data () {
      let that = this
      return {
        actions: [{
          label: 'logout',
          handler () {
            that.handleLogout()
          }
        }]
      }
    },

    methods: {
      ...mapActions([
        'logout'
      ]),
      handleLogout () {
        this.logout()
      }
    }
  }
</script>
