import * as type from 'src/admin/vuex/mutation-types'
import * as postAPI from 'api/post'
import moment from 'moment'

const state = {
  postDetails: null
}

const mutations = {
  [type.BLOG_CHANGE_POST_TITLE] (state, { title }) {
    state.postDetails.title = title
  },
  [type.BLOG_CHANGE_POST_CONTENT] (state, { content }) {
    state.postDetails.content = content
  },
  [type.BLOG_CHANGE_POST_STATUS] (state, { status }) {
    state.postDetails.status = status
  },
  [type.BLOG_CHANGE_POST_COVER] (state, { coverImage }) {
    state.postDetails.coverImage = coverImage
  },
  [type.BLOG_CHANGE_POST_TAGS] (state, { tags }) {
    state.postDetails.tags = tags
  },
  [type.BLOG_CHANGE_POST] (state, { postDetails }) {
    state.postDetails = postDetails
  }
}

const actions = {
  getPostDetails ({ commit }, postId) {
    commit(type.BLOG_CHANGE_POST, { postDetails: null })
    postAPI.getPostDetails(postId).then(response => {
      commit(type.BLOG_CHANGE_POST, { postDetails: response.data })
    })
  },
  changePostTitle ({ commit }, title) {
    commit(type.BLOG_CHANGE_POST_TITLE, { title })
  },
  changePostContent ({ commit }, content) {
    commit(type.BLOG_CHANGE_POST_CONTENT, { content })
  },
  changePostStatus ({ commit }, status) {
    commit(type.BLOG_CHANGE_POST_STATUS, { status })
  },
  changePostCover ({ commit }, coverImage) {
    commit(type.BLOG_CHANGE_POST_COVER, { coverImage })
  },
  changePostTags ({ commit }, tags) {
    commit(type.BLOG_CHANGE_POST_TAGS, { tags })
  },
  savePostDetails ({ commit }, postDetails) {
    if (postDetails.objectId) {
      postAPI.savePost(postDetails).then(response => {
        commit(type.BLOG_CHANGE_POST, { postDetails: response.data })
      }).catch(error => {
        alert(error.errorMessage)
      })
    } else {
      postAPI.createPost(postDetails).then(response => {
        commit(type.BLOG_CHANGE_POST, { postDetails: response.data })
      })
    }
  },
  createDummyPost ({ commit }) {
    let postDetails = {
      title: moment(new Date).format('MMM D, YYYY') + ' POST',
      content: '',
      coverImage: '',
      tags: [],
      status: 'draft'
    }
    commit(type.BLOG_CHANGE_POST, { postDetails })
  },
  deletePost ({ commit }, postId) {
    postAPI.deletePost(postId).then(response => {
      commit(type.BLOG_CHANGE_POST, { postDetails: null })
    })
  }
}

export default {
  state,
  mutations,
  actions
};
