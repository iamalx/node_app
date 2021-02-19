
const  express = require('express')
const router = express.Router()
const path = require('path')

const rootDirectory = require('../helpers/path')
const adminData = require('./admin')

router.get('/',(req, res, next) => {
    console.log(adminData, req.url)     
    // next() //allows the request to continue to the next middlewear
    res.sendFile(path.join(rootDirectory, 'views', 'shop.html'))
})

module.exports = {router: router}