const express = require('express')
const app = express()

// start the express server on this port
const listenPort = 6789

// set static content
app.use(express.static('public'))

console.log('Server starting @ http://localhost:' + listenPort)

module.exports = app.listen(listenPort)
