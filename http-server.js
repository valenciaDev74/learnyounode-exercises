'use strict'

const http = require('node:http')
const fs = require('node:fs')

const port = process.argv[2] || 3000
const archiveRoot = process.argv[3]

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream(archiveRoot).pipe(res)
})

server.listen(port)
