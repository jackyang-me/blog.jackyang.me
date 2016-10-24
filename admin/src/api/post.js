function postFetch (url, request) {
  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(request)
  }).then(response => response.json());
}

function getFetch (url) {
  return fetch(url).then(response => response.json());
}

export function getPostDetails (id) {
  return getFetch('/post/' + id);
}

export function getPostList (pageIndex) {
  return getFetch('/post/list/' + pageIndex);
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
