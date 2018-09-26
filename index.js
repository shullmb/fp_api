require('dotenv').config();
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./config/passportConfig');
const isLoggedIn = require('./middleware/isLoggedIn');
const flash = require('connect-flash');
const port = process.env.PORT || 3001;

const app = express();

app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use( (req,res,next) => {
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
})

app.get('/', (req,res) => {
  res.render('index');
})

app.get('/profile', isLoggedIn, (req,res) => {
  res.render('profile');
})

app.use('/auth', require('./controllers/auth'));
app.use('/api/v1/frostdates', require('./controllers/frostdates'));

const server = app.listen(port, () => {
  console.log(`❄️  server listening on port ${port} ❄️`);
})

module.exports = server;
