const http = require('http')
const routes = require('./practice_route')

const server = http.createServer(routes.handler)

server.listen(4000)