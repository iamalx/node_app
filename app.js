// module for HTTP
const http = require('http')

// function rqListener(req, res) {}
// http.createServer(rqListener)

// create ur server - expect response
// powered by an event loop to always listen to a request
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    // exit server - if it quits ppl cannot reach your server anymore
    // process.exit()
    // set headers as a response
    res.setHeader('Content-Type', 'text/html')
    // respond with html code 
    res.write('<html>')
    res.write('<head><title>Node app</title></head>')
    res.write('<body>Hello World!</body>')
    res.write('</html>')
    res.end()
})

// listen to server - start
server.listen(3000)