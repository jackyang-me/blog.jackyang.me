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

export function createPost (postDetails) {
  return fetch.post('/posts', postDetails)
}

export function deletePost (postId) {
  return fetch.delete(`/posts/${postId}`)
}
