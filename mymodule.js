'use strict'

const fs = require('node:fs')
const path = require('node:path')

module.exports = function (dirname, ext, callback) {
  let filteredList

  ext = `.${ext}`

  fs.readdir(dirname, (err, files) => {
    if (err) { return callback(err) }
    filteredList = files.filter(fileName => path.extname(fileName) === ext)
    callback(null, filteredList)
  })
}
