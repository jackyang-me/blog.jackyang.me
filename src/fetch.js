function parseResponse (response) {
  return Promise.all([response.status,response.statusText, response.json()])
}

function checkStatus ([status,statusText,data]) {
  if(status >= 200 && status < 300){
    return data;
  }else{
    let error = new Error(statusText);
    error.status = status;
    error.error_message = data;
    return Promise.reject(error);
  }
}

export default {
  get (url, params = {}, headers = {}) {
    let reqHeaders = new Headers()
    let queries = []

    reqHeaders.append('Accept', 'application/json')
    Object.keys(params).forEach(param => {
      queries.push(`${param}=${encodeURIComponent(params[param])}`)
    })

    url = queries.length ? url + '?' + queries.join('&') : url
    console.log('fetch.get', url)

    return fetch(url, {
      method: 'GET',
      headers: reqHeaders,
      credentials:"include",
      cache: 'default',
      mode:'cors'
    }).then(response => response.json())
  },

  post (url, request = {}, headers = {}) {
    let reqHeaders = new Headers()
    reqHeaders.append('Content-Type', 'application/json')
    reqHeaders.append('Accept', 'application/json')

    return fetch(url, {
      method: 'POST',
      headers: headers,
      headers: reqHeaders,
      credentials:"include",
      mode:'cors',
      body: JSON.stringify(request)
    }).then(response => response.json())
  },

  patch (url, params = {}, headers = {}) {
    let reqHeaders = new Headers()
    reqHeaders.append('Content-Type', 'application/json')
    reqHeaders.append('Accept', 'application/json')

    return fetch(url, {
      method: 'PATCH',
      headers: reqHeaders,
      credentials:"include",
      mode:'cors',
      body: JSON.stringify(params)
    }).then(response => response.json())
  },

  put (url, param = {}, headers = {}) {
    let reqHeaders = new Headers()
    reqHeaders.append('Content-Type', 'application/json')
    reqHeaders.append('Accept', 'application/json')

    return fetch(url, {
      method: 'PUT',
      headers: reqHeaders,
      credentials:"include",
      mode:'cors',
      body: JSON.stringify(param)
    }).then(response => response.json())
  },

  delete (url, headers = {}) {
    let reqHeaders = new Headers()
    reqHeaders.append('Content-Type', 'application/json')
    reqHeaders.append('Accept', 'application/json')

    return fetch(url, {
      method: 'DELETE',
      credentials:"include",
      headers: reqHeaders,
      mode:'cors'
    }).then(response => response.json())
  }
}
