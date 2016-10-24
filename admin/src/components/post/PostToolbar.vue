<template>
  <div class="postToolbar">
    <button v-if="post.status === 'draft'" class="btn--primary" @click="handleClickPublish">Publish</button>
    <button class="btn--warn" @click="handleClickDelete">Delete</button>
    <button v-if="post.status === 'draft'" class="btn" @click="handleClickSave">Save</button>
    <button v-if="post.status === 'released'" class="btn" @click="handleClickUpdate">Update</button>
    <button class="btn" @click="handleClickExpand">Expand</button>
  </div>
</template>

<script>
  /**
   * 1. as draft, can do: save, delete, publish
   * 2. as released, can do: update, delete
   */
  import { mapActions, mapGetters } from 'vuex';

  export default {
    props: {
      post: {
        type: Object,
        default () {
          return {}
        }
      },
      saveHandler: {
        type: Function,
        default: null
      },
      updateHandler: {
        type: Function,
        default: null
      },
      deleteHandler: {
        type: Function,
        default: null
      },
      publishHandler: {
        type: Function,
        default: null
      },
      expandHandler: {
        type: Function,
        default: null
      }
    },

    methods: {
      handleClickExpand () {
        this.expandHandler && this.expandHandler();
      },
      handleClickSave () {
        this.saveHandler && this.saveHandler(this.post);
      },
      handleClickPublish () {
        this.publishHandler && this.publishHandler(this.post);
      },
      handleClickUpdate () {
        this.updateHandler && this.updateHandler(this.post);
      },
      handleClickDelete () {
        this.deleteHandler && this.deleteHandler(this.post);
      }
    }
  }
</script>
