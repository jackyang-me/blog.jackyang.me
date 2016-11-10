'use strict'

exports.verifyToken = function *(next) {
  let token = this.header.authentication
  let session = this.app.context.userSession[token]

  if (!session) {
    this.throw(401, 'Unauthorized')
  }

  if (Date.now() - session.created > session.maxAge) {
    this.throw(401, 'token expired')
  }

  return yield next
}
