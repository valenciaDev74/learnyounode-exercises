'use strict'

const mod = require('./mymodule.js')

const dir = process.argv[2]
const ext = process.argv[3]

mod(dir, ext, (err, data) => {
  if (err) { return console.error(err) }
  data.forEach(element => {
    console.log(element)
  })
})
