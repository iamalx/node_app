const Product = require('../models/product')

exports.getProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
}

exports.postAddProducts =  (req, res, next) => {
    const product = new Product(req.body.title)
    product.save()
    console.log(req.body.title, -1)
    // products.push({ title: req.body.title });
    res.redirect('/shop');
}

exports.getProductList = (req, res, next) => {
    Product.fetchAll( products => {
        console.log(products.title,products, 4) 
        res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/shop',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
        });
    })
}

