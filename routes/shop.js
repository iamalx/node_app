
const  express = require('express')
const router = express.Router()
const path = require('path')

router.get('/',(req, res, next) => {
    console.log(next, req.url) 
    // next() //allows the request to continue to the next middlewear
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))
})

module.exports = {router: router}