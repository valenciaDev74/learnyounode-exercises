'use strict'

const fs = require('node:fs')
const path = require('node:path')

const dir = process.argv[2]
const ext = `.${process.argv[3]}`

fs.readdir(dir, (err, files) => {
  if (err) (console.log(err))
  files
    .filter(file => path.extname(file) === ext)
    .forEach(file => console.log(file))
})
