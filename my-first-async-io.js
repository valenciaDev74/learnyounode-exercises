'use strict'

const fs = require('node:fs')

fs.readFile(process.argv[2], 'utf-8', (err, file) => {
  if (err) { console.log(err) }
  console.log(file.split('\n').length - 1)
})
