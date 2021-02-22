const path = require('path');

const express = require('express');

// dont need anymore bc of controllers 
// const rootDir = require('../util/path');
// const adminData = require('./admin');

// instead imports product controllers
const productsControlers = require('../controlers/products')

const router = express.Router();

router.get('/shop', productsControlers.getProductList);

module.exports = router;




