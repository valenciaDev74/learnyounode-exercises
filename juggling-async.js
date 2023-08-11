'use strict'

const http = require('node:http')

const urls = [process.argv[2], process.argv[3], process.argv[4]]

function getLinkContent (url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      if (res.statusCode === 200) {
        res.setEncoding('utf8')

        let rawData = ''

        res.on('data', (chunk) => {
          rawData += chunk
        })

        res.on('end', () => {
          resolve(rawData)
        })
      } else {
        reject(res.statusCode)
      }
    })
  })
}

async function main () {
  const results = await Promise.all(urls.map(getLinkContent))
  results.forEach((data) => {
    console.log(data)
  })
}

main()
