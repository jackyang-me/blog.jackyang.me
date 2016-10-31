import fetch from 'src/fetch'

export function getPostDetails (id) {
  return fetch.get(`/posts/${id}`)
}

export function getPostList (params) {
  return fetch.get('/posts', params)
}



export function publishPost (post) {
  return postFetch('/post/publish', post);
}

export function newPost () {
  return postFetch('/post/new');
}

export function deletePost (id) {
  return postFetch('/post/delete', {id: id});
}

export function saveDraft (post) {
  return postFetch('/post/saveDraft', post);
}

export function updatePost (post) {
  return postFetch('/post/update', post);
}
