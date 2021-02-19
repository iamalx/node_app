const  express = require('express')
const router = express.Router()

const path = require('path')

const rootDirectory = require('../helpers/path')

products = []

router.get('/add-product', (req, res, next) => {
    console.log(next, req.url)
    // res.setHeader('') // replace res.
    res.sendFile(path.join(rootDirectory, 'views', 'add-product.html')) 
})

router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    products.push({title: req.body.title}) 
    res.redirect('/buy')
})


/* router.use('/add-product',(req, res, next) => {
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

router.use('/product',(req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

*/


module.exports = {
    router: router,
    products: products,
}
