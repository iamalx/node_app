const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const productsControlers = require('../controlers/products')

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsControlers.getProduct);

// /admin/add-product => POST
router.post('/add-product', productsControlers.postAddProducts);

module.exports = router;