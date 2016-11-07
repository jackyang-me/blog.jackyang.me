<template>
  <modal title="uploading image">
    <progress-bar :percentage="progress" sync-label></progress-bar>
  </modal>
</template>

<script>
  import Modal from 'components/common/modal/Modal.vue'
  import ProgressBar from 'components/common/progress/Progress.vue'
  
  export default {
    components: {
      'modal': Modal,
      'progress-bar': ProgressBar
    },

    props: {
      progress: [Number, String]
    }
  }
</script>
