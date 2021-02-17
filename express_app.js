// const http = require('http') //not
// const routes = require('./practice_route')
const bodyParser = require('body-parser')
const  express = require('express')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use( '/admin',adminRoutes.router)
app.use('/buy', shopRoutes.router)

// app.use((req, res, next) => {
//     res.status(404).send(
//         `<html>
//             <head>
//                 <title>404</title>
//             </head>
//             <body>
//                 <h1>Page not found :'(</h1>
//             </body>
//         </html>`
//     )
// })

// const server = http.createServer(app) // not needed in Express
app.listen(4000)



// dbncjdsbvkhsv