<template>
  <toolbar class="c-postEdit__toolbar" title="Edit Post" :actions="toolbarActions"></toolbar>
</template>

<script>
  import Toolbar from 'components/common/toolbar/Toolbar.vue'

  export default {
    components: {
      'toolbar': Toolbar
    },

    data () {
      return {
        toolbarActions: [{
          label: 'CLOSE',
          handler () {
            console.log('click close')
          }
        }, {
          label: 'SAVE',
          handler () {
            console.log('click save')
          }
        }]
      }
    }
  }
</script>
