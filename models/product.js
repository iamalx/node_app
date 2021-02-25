// const { db } = require('../connectors');
const getDb =  require('../util/database').getDb
const mongoDBpackage = require('mongodb')
class Product {
    constructor(title, price, description, imageUrl, id) {
        this.title = title
        this.price = price
        this.description = description
        this.imageUrl = imageUrl
        this._id = id ? new mongoDBpackage.ObjectId(id) : null
    }

    save() {
        const db = getDb()
        let dbOperations;
        if(this._id) {
            console.log(this)
            dbOperations = db.collection('products')
              .update({_id: this._id}, {$set: this})
        }
        else {
          dbOperations = db.collection('products').insertOne(this)
        }
        return dbOperations
            .then(result => {
                console.log('save')
            })
            .catch(err => {
                console.log(err)
            }) 
    }
    static fetchAll() {
        const db = getDb()
        return db.collection('products').find().toArray()
            .then(result => {
              // console.log(result)
              return result
            })
            .catch(err => {
                console.log(err)
            })

    }

    static findById(proId) {
      console.log('proId-prod: ', proId)
        const db = getDb()
        // console.log(mongodb)
        return db.collection('products').find({_id: new mongoDBpackage.ObjectId(proId)})
            .next()
            .then(result => {
              return result
            })
            .catch(err => {
              console.log(err)
            })

    }

    static deleteById(prodId) {
      const db = getDb()
        // console.log(mongodb)
      return db.collection('products').deleteOne({_id: new mongoDBpackage.ObjectId(prodId)})
        .then(result => {
          console.log('DELETE!', result)
        })
        .catch()  
    }
}


/* const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
}); */

module.exports = Product;
