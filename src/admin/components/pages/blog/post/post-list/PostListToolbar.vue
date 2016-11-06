<template>
  <toolbar class="c-postList__toolbar" :title="total + ' Post'" :actions="toolbarActions" :search-handler="handleSearch"></toolbar>
</template>

<script>
  import Toolbar from 'components/common/toolbar/Toolbar.vue'

  export default {
    components: {
      'toolbar': Toolbar
    },

    props: {
      title: {
        type: String,
        default: ''
      },
      searchHandler: {
        type: Function,
        default: null
      }
    },

    data () {
      let that = this
      return {
        total: 1,
        toolbarActions: [{
          label: 'ADD POST',
          handler () {
            that.handleAddPost()
          }
        }]
      }
    },

    methods: {
      handleSearch (value) {
        this.searchHandler && this.searchHandler(value)
      },
      handleAddPost () {
        this.$router.push({path: '/blog/post/new'})
      }
    }
  }
</script>
