import fetch from 'src/fetch'

export function getPostDetails (postId) {
  return fetch.get(`/admin/blog/posts/${postId}`)
}

export function getPostList (params) {
  return fetch.get('/admin/blog/posts', params)
}

export function savePost (postDetails) {
  return fetch.put(`/admin/blog/posts/${postDetails.objectId}`, postDetails)
}

export function createPost (postDetails) {
  return fetch.post('/admin/blog/posts', postDetails)
}

export function deletePost (postId) {
  return fetch.delete(`/admin/blog/posts/${postId}`)
}
