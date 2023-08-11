'use strict'

const consoleArgs = process.argv.slice(2)

let sum = 0

for (let i = 0; i < consoleArgs.length; i++) {
  sum = sum + parseInt(consoleArgs[i])
}

console.log(sum)
