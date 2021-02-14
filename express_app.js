// const http = require('http') //not
// const routes = require('./practice_route')
const  express = require('express')

const app = express()

app.use('/',(req, res, next) => {
    console.log(next, 'first')
    // next() //allows the request to continue to the next middlewear
    res.send(`<h1>Hello World!!!!!!</h1>`)
})

app.use('/product-page',(req, res, next) => {
    console.log(next, 'next')
    // res.setHeader('') // replace res.
    res.send(`<h1>Hello World!</h1>`) //content type is set to html/txt as header 

})

app.use('/',(req, res, next) => {
    console.log(next, 'last')
    // res.setHeader('') // replace res.
    // res.send(`<h1>Hello World!</h1>`) //content type is set to html/txt as header 

})
// const server = http.createServer(app) // not needed in Express
app.listen(4000)



// dbncjdsbvkhsv