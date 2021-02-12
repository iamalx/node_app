// module for HTTP
const http = require('http')
const routes = require('./routes2.js')
// const fs = require('fs')
// function rqListener(req, res) {}
// http.createServer(rqListener)


// SENDING A RESPONSE AND HEADERS

// create ur server - expect response
// powered by an event loop to always listen to a request
// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers)

//     // exit server - if it quits ppl cannot reach your server anymore
//     // process.exit()

//     // set headers as a response
//     res.setHeader('Content-Type', 'text/html')

//     // responce with html code 
//     res.write('<html>')
//     res.write('<head><title>Node app</title></head>')
//     res.write('<body>Hello World!</body>')
//     res.write('</html>')

//     // end write responce 
//     res.end()
// })

// ROUTING A REQUEST 

/* const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    
    const url = req.url
    if(url === '/') {
        res.write('<html>')
        res.write('<head><title>Node app - Enter Message</title></head>')
        res.write(`<body>
                    <form action="/mesasge" method="POST">
                        <input type="button" name="message">
                        <button type="submit"></button>
                    </form>
                </body>`)
        res.write('</html>')    
        return res.end()
    }

    // set headers as a response
    res.setHeader('Content-Type', 'text/html')

    // responce with html code 
    res.write('<html>')
    res.write('<head><title>Node app</title></head>')
    res.write('<body>Hello World!</body>')
    res.write('</html>')

    // end write responce 
    res.end()
}) */


//  REDIRECTING REQUEST 
    
/* const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers)
    
    const url = req.url
    const method = req.method
    if(url === '/') {
        console.log(req.url, '/...')
        res.write('<html>')
        res.write('<head><title>Node app - Enter Message</title></head>')
        res.write(`<body>
                    <form action="/message" method="POST">
                        <input type="button" name="message">
                        <button type="submit"></button>
                    </form>
                </body>`)
        res.write('</html>')    
        return res.end()
    }
 
    if(url === '/message' &&  method === 'POST') {
        console.log(req.url, '/message...')
        fs.writeFileSync('message.txt', 'dummy text') 
       
       // res.writeHead(302, {headerObject}) // 1 option instead of setHEader() and statusCode 
       res.statusCode = 302
       res.setHeader('Location', '/')
       return res.end()
    }
    // set headers as a response
    res.setHeader('Content-Type', 'text/html')

    // responce with html code 
    res.write('<html>')
    res.write('<head><title>Node app</title></head>')
    res.write('<body>Hello World!</body>')
    res.write('</html>')

    // end write responce 
    res.end()
}) */

// PARSING REQUEST BODIES
/* 
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers)
    console.log(1)
    const url = req.url
    const method = req.method
    if(url === '/') {
        console.log(req.url, '/...')
        res.write('<html>')
        res.write('<head><title>Node app - Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit"></button></form></body>')
        res.write('</html>')    
        return res.end()
    }
 
    if(url === '/message' &&  method === 'POST') {
        console.log(req.url, '/message...')
        const data = []
        req.on('data', (chuck) => {
            data.push(chuck) 
        })
        return req.on('end', () => {
            const parseData = Buffer.concat(data).toString()
            const messageInput = parseData.split('=')[1]
            fs.writeFileSync('message.txt', messageInput) 

            // res.writeHead(302, {headerObject}) // 1 option instead of setHEader() and statusCode 
            res.statusCode = 302
            res.setHeader('Location', '/')
            return res.end()
        })
    }
    // console.log('ssss')
    // set headers as a response
    res.setHeader('Content-Type', 'text/html')

    // responce with html code 
    res.write('<html>')
    res.write('<head><title>Node app</title></head>')
    res.write('<body>Hello World!</body>')
    res.write('</html>')

    // end write responce 
    res.end()
}) */

// 36. Blocking and Non-Blocking Code
/* const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers)
    console.log(1)
    const url = req.url
    const method = req.method
    if(url === '/') {
        console.log(req.url, '/...')
        res.write('<html>')
        res.write('<head><title>Node app - Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit"></button></form></body>')
        res.write('</html>')    
        return res.end()
    }
 
    if(url === '/message' &&  method === 'POST') {
        console.log(req.url, '/message...')
        const data = []
        req.on('data', (chuck) => {
            data.push(chuck) 
        })
        return req.on('end', () => {
            const parseData = Buffer.concat(data).toString()
            const messageInput = parseData.split('=')[1]
            // fs.writeFileSync('message.txt', messageInput) // synchronis file writing 
            fs.writeFile('message.txt', messageInput, err => {
                // res.writeHead(302, {headerObject}) // 1 option instead of setHEader() and statusCode 
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            }) 
        })
    }
    // console.log('ssss')
    // set headers as a response
    res.setHeader('Content-Type', 'text/html')

    // responce with html code 
    res.write('<html>')
    res.write('<head><title>Node app</title></head>')
    res.write('<body>Hello World!</body>')
    res.write('</html>')

    // end write responce 
    res.end()
}) */

// 38. Using the Node Modules System
const server = http.createServer(routes.handler)
// listen to server - start
server.listen(3000)
