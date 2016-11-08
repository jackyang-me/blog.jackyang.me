<template>
  <div class="u-toolbar">
    <div class="u-toolbar__tools">
      <h1 v-if="title" class="u-toolbar__title">{{title}}</h1>
      <input v-if="searchHandler" type="text" class="u-toolbar__search" placeholder="search anything" v-model="localSearchKey">
    </div>
    <div class="u-toolbar__actions">
      <button class="u-btn" v-for="action in actions" @click="handleClickAction(action)">{{action.label}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      searchKey: String,
      actions: {
        type: Array, // [{label: '', handler}]
        default () {
          return []
        }
      },
      searchHandler: {
        type: Function,
        default: null
      }
    },

    data () {
      return {
        localSearchKey: this.searchKey
      }
    },

    watch: {
      searchKey (value) {
        this.localSearchKey = value
      },
      localSearchKey (value) {
        this.searchHandler && this.searchHandler(value);
      }
    },

    methods: {
      handleClickAction (action) {
        action.handler && action.handler();
      }
    }
  }
</script>
