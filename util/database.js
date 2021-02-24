const mongodb = require('mongodb').MongoClient
const connect = require('../connectors')
// const MongoClient = mongodb.MongoClient

let _db

console.log(connect.db)
const mongoConnect = callback => {
  new mongodb.connect(
    `mongodb+srv://iamalx:${connect.db}@cluster0.iezw4.mongodb.net/shop?retryWrites=true&w=majority`
  , { useNewUrlParser: true, useUnifiedTopology: true })
    .then( client => {
      console.log('connected!!!')
      _db = client.db()  
      callback(client)
    })
    .catch(err => {
      console.log(err)
    })
}

const getDb = _ => {
  if(_db) return _db 
  throw 'No database found!'

}

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

module.exports = {
  mongoConnect: mongoConnect,
  getDb: getDb
}


