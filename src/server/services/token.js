'use strict'

exports.verifyToken = function *(next) {
  let token = this.header.authentication
  let userId = this.header['user-id']
  let session = this.app.context.userSession[userId]

  if (!session || session.token !== token) {
    this.throw(401, 'Unauthorized')
  }

  if (Date.now() - session.activatedFrom > session.maxAge) {
    this.throw(401, 'token expired')
  }

  return yield next
}
