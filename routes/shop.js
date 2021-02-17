
const  express = require('express')
const router = express.Router()

router.get('/',(req, res, next) => {
    console.log(next, req.url) 
    next() //allows the request to continue to the next middlewear
    res.send(`<h1>Hello World!!!!!!</h1>`)
})

module.exports = {router: router}