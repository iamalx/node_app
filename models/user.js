const mongodb = require('mongodb');

const getDb = require('../util/database').getDb

class User {
    constructor(username, email) {
        this.username = username
        this.email = email
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

    static findById(userId) {
        const db = getDb()
        return db.collection('users').findById({_id: new ObjectId(userId)}) 
            .then( result => {
                console.log('User Found')
            })
            .cath(err => {
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
