'use strict'
const crypto = require('crypto')

exports.encrypt = function encrypt (email, pass) {
  const hmac = crypto.createHmac('sha1', email).update(pass).digest('hex')
  return hmac
}
