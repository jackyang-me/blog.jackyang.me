export function getPostDetails (id) {
  return fetch('/post/' + id).then(response => response.json());
}

export function getPostList (pageIndex) {
  return fetch('/post/list/' + pageIndex).then(response => response.json());
}
