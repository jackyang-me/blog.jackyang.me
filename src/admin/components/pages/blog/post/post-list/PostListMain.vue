<template>
  <div class="c-postListMain">
    <post-list-toolbar :title="title" :search-handler="handleSearch"></post-list-toolbar>
    <post-list-table :post-list="postList" :filter-key="filterKey" :selected-post-id="selectedPostId"></post-list-table>
  </div>
</template>

<script>
  import PostListToolbar from './PostListToolbar.vue'
  import PostListTable from './PostListTable.vue'

  export default {
    components: {
      'post-list-toolbar': PostListToolbar,
      'post-list-table': PostListTable
    },

    data () {
      return {
        postList: [{
          id: '1',
          title: 'title 1',
          status: 'released',
          date: new Date()
        }, {
          id: '2',
          title: 'title 2',
          status: 'released',
          date: new Date()
        }],
        selectedPostId: [],
        filterKey: ''
      }
    },

    computed: {
      title () {
        return this.postList.length + ' Post'
      }
    },

    methods: {
      handleSearch (value) {
        console.log('filter key', value)
        this.filterKey = value
      }
    }
  }
</script>
