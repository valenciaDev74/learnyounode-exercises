'use strict'

const http = require('node:http')
const { URL } = require('node:url')

const port = process.argv[2] || 3000

const server = http.createServer(function (req, res) {
  const { method, url } = req
  const urlString = new URL(url, `http://localhost:${port}`)
  const date = new Date(urlString.searchParams.get('iso'))

  switch (method) {
    case 'GET':

      switch (urlString.pathname) {
        case '/api/parsetime': {
          const newDate = JSON.stringify({
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
          })

          res.end(newDate)

          break
        }

        case '/api/unixtime': {
          const newDate = JSON.stringify({
            unixtime: date.getTime()
          })

          res.end(newDate)

          break
        }

        default:
          res.writeHead(404)
          break
      }
      break

    default:
      break
  }
})

server.listen(port)
