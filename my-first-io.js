'use strict'

const fs = require('node:fs')

const file = fs.readFileSync(process.argv[2], 'utf-8')

console.log(file.split('\n').length - 1)
