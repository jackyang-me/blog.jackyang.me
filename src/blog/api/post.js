import fetch from 'src/fetch'

export function getPostDetails (id) {
  return fetch.get(`/posts/${id}`)
}

export function getPostList (params) {
  return fetch.get('/posts', params)
}
