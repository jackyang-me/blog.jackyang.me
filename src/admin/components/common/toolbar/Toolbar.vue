<template>
  <div class="u-toolbar">
    <div class="u-toolbar__tools">
      <h1 v-if="title" class="u-toolbar__title">{{title}}</h1>
      <input v-if="searchHandler" type="text" class="u-toolbar__search" placeholder="search anything" v-model="searchKey">
    </div>
    <div class="u-toolbar__actions">
      <button class="u-btn" v-for="action in actions" @click="handleClickAction(action)">{{action.label}}</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
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
        searchKey: ''
      }
    },

    watch: {
      searchKey (value) {
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
