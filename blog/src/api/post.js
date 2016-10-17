export function getPostDetails (id) {
  return fetch('/post/' + id).then(response => response.json());
}

export function getPostList () {

}
