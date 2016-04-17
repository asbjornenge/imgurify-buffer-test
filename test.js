var fs = require('fs')
var pony = require('./pony.jpg')
var realPony = fs.readFileSync('pony').toString('base64')

console.log(pony.indexOf(realPony) > 0)
