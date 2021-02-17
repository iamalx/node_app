// const http = require('http') //not
// const routes = require('./practice_route')
const  express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))

app.post('/add-product',(req, res, next) => {
    console.log(next, req.url)
    // res.setHeader('') // replace res.
    res.send(`
        <html>
            <head>
                <title>Express Node App</title>
            </head>
            <body>
                <h1>Please enter message</h1>
                <form action="/product" method="POST">
                    <input type="text" name='user_name'>
                    <button type="submit"></button>
                </form>
            </body>
        </html>
    `) //content type is set to html/txt as header 

})

app.use('/product',(req, res, next) => {
    console.log(next, req.url)
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req, res, next) => {
    console.log(next, req.url) 
    next() //allows the request to continue to the next middlewear
    res.send(`<h1>Hello World!!!!!!</h1>`)
})

app.use('/',(req, res, next) => {
    console.log(next, 'last')
    // res.setHeader('') // replace res.
    // res.send(`<h1>Hello World!</h1>`) //content type is set to html/txt as header 

})
// const server = http.createServer(app) // not needed in Express
app.listen(4000)



// dbncjdsbvkhsv