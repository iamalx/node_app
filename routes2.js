
const fs = require('fs')

const requestHandler = (req, res) => {
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
}

module.exports = {
    handler: requestHandler,
}

// Other options for exports
/* module.exports = requestHandler;
module.exports.handler = requestHandler;
exports.handler = requestHandler;
exports = requestHandler; */



