import fetch from 'src/fetch'

export function log (data) {
  return fetch.post('/blog/actionLog', data)
}
