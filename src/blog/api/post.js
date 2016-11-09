import fetch from 'src/fetch'

export function getPostDetails (id) {
  return fetch.get(`/blog/posts/${id}`)
}

export function getPostList (params) {
  return fetch.get('/blog/posts', params)
}
