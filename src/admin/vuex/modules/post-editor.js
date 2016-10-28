import { deletePost, updatePost, publishPost, saveDraft } from 'api/post';
import Vue from 'vue';

export default {
  state: {
    expand: false,
    saving: false,
    loading: false
  },
  mutations: {},
  actions: {
    toggleExpand ({state}) {
      state.expand = !state.expand;
    },
    deletePost ({rootState}, id) {
      deletePost(id).then(response => {
        rootState.postList.postList = rootState.postList.postList.filter(post => post.objectId !== id);
        rootState.postList.selectedPostId = rootState.postList.postList[0] ? rootState.postList.postList[0].objectId : '';
      });
    },
    saveDraft ({rootState}, post) {
      saveDraft(post).then(response => {
        _updatePostList(rootState.postList.postList, response.data.post);
      });
    },
    updatePost ({rootState}, post) {
      updatePost(post).then(response => {
        _updatePostList(rootState.postList.postList, response.data.post);
      });
    },
    publishPost ({rootState}, post) {
      publishPost(post).then(response => {
        _updatePostList(rootState.postList.postList, response.data.post);
      });
    },
    editPostTitle ({rootState}, data) {
      _updatePostValue(rootState.postList.postList, data.postId, 'title', data.title);
    },
    editPostTags ({rootState}, data) {
      _updatePostValue(rootState.postList.postList, data.postId, 'tags', data.tags);
    },
    editPostContent ({rootState}, data) {
      _updatePostValue(rootState.postList.postList, data.postId, 'content', data.content);
    }
  }
};

function _updatePostValue (postList, postId, key, value) {
  for (let i = 0; i < postList.length; i++) {
    if (postList[i].objectId === postId) {
      postList[i][key] = value;
      break;
    }
  }
}

function _updatePostList (postList, post) {
  for (let i = 0; i < postList.length; i++) {
    if (postList[i].objectId === post.objectId) {
      Vue.set(postList, i, post);
      break;
    }
  }
}
