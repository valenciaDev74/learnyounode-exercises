'use strict'

const net = require('node:net')

const port = process.argv[2]

const server = net.createServer((socket) => {
  const date = new Date()

  const year = date.getFullYear().toString()
  const month = (date.getMonth() + 1).toString()
  const day = date.getDate().toString()
  const hour = date.getHours().toString()
  const min = date.getMinutes().toString()

  const data = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')} ${hour.padStart(2, '0')}:${min.padStart(2, '0')}`

  console.log(data)

  socket.write(data + '\n')

  socket.end()
})
server.listen(port)
