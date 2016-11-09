'use strict'

 const fields = [{
  name: 'title',
  type: String,
  mandatory: true
}, {
  name: 'subtitle',
  type: String,
  mandatory: false
}, {
  name: 'tags',
  type: Array,
  mandatory: false
}, {
  name: 'content',
  type: String,
  mandatory: true
}, {
  name: 'status',
  type: String,
  mandatory: true,
  validation: function (value) {
    if (['draft', 'released', 'deleted', 'hide'].indexOf(value) === -1) {
      return false
    } else {
      return true
    }
  },
  errorMessage: 'invalid value of status'
}, {
  name: 'coverImage',
  type: String,
  mandatory: false
}, {
  name: 'readCount',
  type: Number,
  mandatory: true
}, {
  name: 'releasedAt',
  type: Date,
  mandatory: false
}];

module.exports = {
  fields: fields
}
