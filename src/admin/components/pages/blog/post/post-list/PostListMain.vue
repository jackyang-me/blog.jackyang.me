<template>
  <div class="c-postListMain">
    <post-list-toolbar :title="title" :search-key="searchKey" :search-handler="handleSearch"></post-list-toolbar>
    <post-list-table :post-list="postList" :filter-key="searchKey" :selected-post-ids="selectedPostIds"></post-list-table>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import PostListToolbar from './PostListToolbar.vue'
  import PostListTable from './PostListTable.vue'

  export default {
    components: {
      'post-list-toolbar': PostListToolbar,
      'post-list-table': PostListTable
    },

    data () {
      return {
        pageIndex: 1
      }
    },

    created () {
      this.fetchData()
    },

    computed: {
      ...mapState({
        postList: state => state.blog.post.postList.posts,
        searchKey: state => state.blog.post.postList.searchKey,
        selectedPostIds: state => state.blog.post.postList.selectedPostIds
      }),
      title () {
        let length = this.postList.length
        let selected = this.selectedPostIds.length

        if (selected === 0) {
          return length > 1 ? length + ' Posts' : length + ' Post'
        } else {
          return selected + ' Posts selected'
        }
      }
    },

    watch: {
      '$route': 'fetchData'
    },

    methods: {
      ...mapActions([
        'getPostList',
        'changeSearchKey'
      ]),
      handleSearch (value) {
        this.changeSearchKey(value)
      },
      fetchData () {
        this.getPostList(this.pageIndex)
      }
    }
  }
</script>
