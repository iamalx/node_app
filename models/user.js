const mongodb = require('mongodb');

const getDb = require('../util/database').getDb

class User {
    constructor(username, email, cart, id) {
        this.username = username
        this.email = email
        this.cart = cart
        this._id = id 
    }

    save() {
        const db = getDb()
        return db.collection('users').insertOne(this)
            .then( result => {
                console.log('User Created')
            })
            .cath(err => {
                console.log(err)
            })

    }

    addToCart(productId, userId) {
        const cartPorductIndex = this.cart.items.findIndex(item => {
            console.log(item)
            return item._id == productId
            
        })
        let newQuantity = 1
        const updateCartItems = [...this.cart.items]

        if(cartPorductIndex >= 0) {
            newQuantity = this.cart.items[cartPorductIndex].quantity + 1
            updateCartItems[cartPorductIndex].quantity = newQuantity
        } else {
            updateCartItems.push({
                productId: new mongodb.ObjectId(productId),
                quantity: newQuantity
            })
        }
    
        console.log('product', this._id)
        const updateCart = {
            items: [{
                productId: new mongodb.ObjectId(productId),
                quantity: 1
            }]
        }
        // if(this.cart == )
        const db = getDb()
        return db.collection('users').updateOne(
            {_id: new mongodb.ObjectId(userId)}, 
            {$set: {cart: updateCart}}
        )
        .then(result => {
            console.log(result)
        })
        .catch(err => {
            console.log(err)
        })
    }

    static findById(userId) {
        const db = getDb()

        //   console.log('no', db.collection('users').find())
        // return db.collection('users').findOne({_id: new mongodb.ObjectId(userId)}) 
        //     .then( result => {
        //         console.log('User Found',result )
        //         return result
        //     })
        //     .cath(err => {
        //         console.log(err)
        //     })

        return db.collection('users').findOne({_id: new mongodb.ObjectId(userId)})
        .then(result => {
          return result
        })
        .catch(err => {
          console.log(err)
        })
        
      

    }
}
// const User = sequelize.define('user', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   name: Sequelize.STRING,
//   email: Sequelize.STRING
// });

module.exports = User;
