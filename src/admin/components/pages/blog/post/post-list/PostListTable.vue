<template>
  <div class="postList__tableContainer">
    <table class="postList__table">
      <thead>
        <tr>
          <th class="table__cell--minWidth"><input type="checkbox"></th>
          <th>title</th>
          <th>status</th>
          <th>date</th>
          <th>comments</th>
          <th>read count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="postItem in filteredPostList">
          <td><input type="checkbox"></td>
          <td><router-link :to="{path: '/blog/post/edit/123'}" class="link">{{postItem.title}}</router-link></td>
          <td>draft</td>
          <td>date</td>
          <td>0</td>
          <td>10</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      postList: {
        type: Array,
        default () {
          return []
        }
      },
      filterKey: {
        type: String,
        default: ''
      },
      selectedPostId: {
        type: Array,
        default () {
          return []
        }
      }
    },

    computed: {
      filteredPostList () {
        if (!this.filterKey) {
          return this.postList
        } else {
          return this.postList.filter((post) => post.title.indexOf(this.filterKey) !== -1)
        }
      }
    }
  }
</script>
