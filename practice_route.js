const fs = require('fs')

const requestHandler = (req, res) => {
    console.log(req.url, req.method)

    const url = req.url
    const method = req.method

    if(url === '/') { 
        mainUrl(res)
        return
    }

    if(url === '/users') {
        usersUrl(res)
        return
    }

    if(url === '/create-user') {
        createUserUrl(res, req)
        return
    }
}

function mainUrl(res) {
    res.write(`
        <html>
            <head>
                <title>Practice Node App</title>
            </head>
            <body>
                <h1>Please enter message</h1>
                <form action="/create-user" method="POST">
                    <input type="text" name='user_name'>
                    <button type="submit"></button>
                </form>
            </body>
        </html>
    `)
    res.end()

}

function usersUrl(res) {
    res.write(`
        <html>
            <head>
                <title>Lists of Users</title>
            </head>
            <body>
                <h1>Lists of Users</h1>
                <ul>
                    <li>Jimmy</li>
                    <li>Morgan</li>
                    <li>Rodrigo</li>
                </ul>
            
            </body>
        </html>
    `)
    res.end()

}

function createUserUrl(res, req) {
    // console.log('username2')
    const dataArray = []
    req.on('data', (data) => {
        console.log(data)
        dataArray.push(data)
    })

    return req.on('end', _ => {
        const dataParsed = Buffer.concat(dataArray).toString()
        const decipheredData = dataParsed.split('=')[1]
        // console.log(decipheredData)
        
        fs.writeFile('user_names.tbgxt', decipheredData, err => {
            res.statusCode = 302
            res.setHeader('Location', '/')
            return res.end()
        })

    })
}

module.exports = {
    handler: requestHandler
}