<template>
  <div class="postToolbar">
    <button class="btn--primary" @click="handleClickPublish">Publish</button>
    <button class="btn" @click="handleClickSave">Save Draft</button>
    <button class="btn" @click="handleClickExpand">Expand</button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vue';
  
  export default {
    computed: {
      ...mapGetters([
        'postList',
        'selectedPostId'
      ])
    }
    methods: {
      handleClickExpand () {

      },
      handleClickSaveDraft () {

      },
      handleClickPublish () {

      }
    }
  }
</script>
