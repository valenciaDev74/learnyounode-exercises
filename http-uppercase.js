'use strict'

const http = require('node:http')

const port = process.argv[2] || 3000

function upperCase (body) {
  return body.toUpperCase()
}

const server = http.createServer(function (req, res) {
  const { method } = req

  if (method === 'POST') {
    let body = ''

    req.on('data', chunk => {
      body += chunk.toString()
    })

    req.on('end', () => {
      res.writeHead(200, { 'content-type': 'text/plain' })
      res.end(upperCase(body))
    })
  }
})

server.listen(port)
