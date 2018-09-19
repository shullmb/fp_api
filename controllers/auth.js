const express = require('express');
const passport = require('../config/passportConfig');
const db = require('../models');
const UUID = require('uuid/v4');
const router = express.Router();

// GET /auth/signup - sends form for signup
router.get('/signup', (req,res) => {
  res.render('auth/signup');
})

// GET /auth/login - sends form for login
router.get('/login', (req,res) => {
  res.render('auth/login');
})

// POST /auth/signup - process signup form
router.post('/signup', (req,res) => {
  db.user.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      name: req.body.name,
      password: req.body.password,
      api_key: UUID()
    }
  }).spread( (user,created) => {
    if (created) {
      passport.authenticate('local', {
        successRedirect: '/',
        successFlash: 'Account created and logged in!'
      })(req,res);
    } else {
      req.flash('error', 'Email already exists!')
      res.redirect('/auth/signup');
    }
  }).catch( (error) => {
    console.log(error.message);
    req.flash('error', error.message)
    res.redirect('/auth/signup');
  })
})

// POST /auth/login - process login form
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/login',
  successFlash: 'You have logged in!',
  failureFlash: 'Invalid username and/or password!'
}))

// GET /auth/logout - process logout
router.get('/logout', (req,res) => {
  req.logout();
  req.flash('success', 'you have logged out!');
  res.redirect('/');
})

module.exports = router;
