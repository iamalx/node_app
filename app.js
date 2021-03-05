const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session')
const MongoDbStore = require('connect-mongodb-session')(session)

const errorController = require('./controllers/error');
const User = require('./models/user');

const connector = require('./connectors.js')
const MongoUri = `mongodb+srv://${connector.user}:${connector.log}@cluster0.iezw4.mongodb.net/shop?retryWrites=true&w=majority`

const app = express();
const store = new MongoDbStore({
  uri: MongoUri,
  collection: 'sessions'
})

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(
  {
    secret: 'my secret key is this string fyi', 
    resave: false,
    saveUninitialized: false, 
    store: store }
  ))

app.use((req, res, next) => {
  console.log('jjjj')
  User.findById('60370de98d08ce86e7c7cf47')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    `mongodb+srv://${connector.user}:${connector.log}@cluster0.iezw4.mongodb.net/shop?retryWrites=true&w=majority`
  ,{useNewUrlParser: true, useUnifiedTopology: true} )
  .then(result => {
    console.log('sssss')
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Max',
          email: 'max@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
