import fetch from 'src/fetch'

export function getPostDetails (postId) {
  return fetch.get(`/posts/${postId}`)
}

export function getPostList (params) {
  return fetch.get('/posts', params)
}

export function savePost (postDetails) {
  return fetch.put(`/posts/${postDetails.objectId}`, postDetails)
}
