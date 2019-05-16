// const express = require('express')
// const { join } = require('path')
// const app = express()

// app.use(express.static(join(__dirname, '/public')))
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// require('./routes')(app)

// require('./config').connect(_ => app.listen(3000))
const http = require('http')
const PORT = 8080
function handleRequest (req, res) {
  res.end('It Works!! Path Hit: ' + req.url)
}
const server = http.createServer(handleRequest)
server.listen(PORT, _ => {
 console.log('Server listening on: http://localhost:' + PORT)
})
