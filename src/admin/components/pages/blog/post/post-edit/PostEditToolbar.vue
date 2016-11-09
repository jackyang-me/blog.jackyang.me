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
      let that = this
      return {
        toolbarActions: [{
          label: 'CLOSE',
          handler () {
            that.$emit('clickclose')
          }
        }, {
          label: 'SAVE',
          handler () {
            that.$emit('clicksave')
          }
        }]
      }
    }
  }
</script>
