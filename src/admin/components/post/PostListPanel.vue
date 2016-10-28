<template>
  <div class="postListPanel">
    <div class="postListPanel__top">
      <h1 class="postListPanel__header">
        POSTS<button class="btn--primary align-right" @click="newPost">NEW</button>
      </h1>
      <div class="postListPanel__total">{{postList.length}} posts</div>
    </div>
    <div class="postListPanel__listContainer">
      <post-list :post-list="postList" :selected-post-id="selectedPostId"></post-list>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import PostList from './PostList.vue';

  export default {
    props: {
        postList: {
          type: Array,
          default: () => {
            return [];
          }
        },
        selectedPostId: {
          type: String,
          default: ''
        }
    },

    components: {
      'post-list': PostList
    },

    methods: {
      ...mapActions([
        'newPost'
      ]),
    }
  };
</script>
