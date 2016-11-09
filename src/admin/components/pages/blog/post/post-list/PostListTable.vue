<template>
  <div class="c-postList__tableContainer">
    <table class="c-postList__table">
      <thead>
        <tr>
          <th class="u-table__cell--minWidth"><input type="checkbox" class="u-checkboxField"></th>
          <th>title</th>
          <th>status</th>
          <th>released at</th>
          <th>last updated at</th>
          <th>comments</th>
          <th>read count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="postItem in filteredPostList">
          <td><input type="checkbox" class="u-checkboxField"></td>
          <td><router-link :to="{path: '/blog/post/edit/' + postItem.objectId}" class="u-link">{{postItem.title}}</router-link></td>
          <td>{{postItem.status}}</td>
          <td v-if="postItem.status === 'released'">{{postItem.releasedAt | iso | MMM_D_YYYY}}</td>
          <td v-else></td>
          <td>{{postItem.updatedAt | iso | MMM_D_YYYY_HH_mm}}</td>
          <td>0</td>
          <td>{{postItem.readCount || 0}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { iso, MMM_D_YYYY, MMM_D_YYYY_HH_mm } from 'filters/filters'

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
      selectedPostIds: {
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
    },

    filters: {
      iso,
      MMM_D_YYYY,
      MMM_D_YYYY_HH_mm
    }
  }
</script>
