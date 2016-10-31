import fetch from 'src/fetch'

export function getToken (key) {
  return fetch.get(`/upload/token/${key}`)
}
