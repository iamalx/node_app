// const http = require('http') //not
// const routes = require('./practice_route')
const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const rootDirectory = require('./helpers/path')
const app = express()

// 
app.use(bodyParser.urlencoded({extended: false}))
// serves css 
app.use(express.static(path.join(rootDirectory, 'public')))

// routes
app.use('/admin', adminRoutes.router)
app.use('/buy', shopRoutes.router)

// 404
app.use((req, res, next) => {
    console.log(404)
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

// const server = http.createServer(app) // not needed in Express
app.listen(4000)



// dbncjdsbvkhsv