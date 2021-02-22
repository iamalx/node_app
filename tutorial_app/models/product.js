const dirMain = require('../util/path')
const fs = require('fs')
const path = require('path')
// const products = []
const p = path.join(dirMain, 'data', 'products.json')

const getProductFromFile = (cb) => {
      fs.readFile(p, (err, data ) => {
            if(err) {
                return cb([])
            }   
            cb(JSON.parse(data))
        })
}

module.exports = class Product {
    constructor(t) {
        this.title = t
    }

    save() {
        // console.log(this)
        // product.push(this)
        getProductFromFile(products => {
            products.push(this)
            console.log(products)
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err, 2)
            })
        })

    
    }
    // calls this method directly on the clas not on the instantiated method 
    static fetchAll(cb) {
        getProductFromFile(cb)
    }

    /* save() {
        // console.log(this)
        // product.push(this)
        fs.readFile(p, (err, data) => {
            let products = []
            console.log(data, 1)
            if(!err){
                products = JSON.parse(data)
            }
            products.push(this)
            console.log(products)
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err, 2)
            })
        })
    }
    // calls this method directly on the clas not on the instantiated method 
    static fetchAll(cb) {
        fs.readFile(p, (err, data ) => {
            if(err) {
                cb([])
            }
            console.log('3', data)
            cb(JSON.parse(data))
        })
       
    } */
}  