const router = require('express').Router();
const { User } = require('../models');

// if login button is clicked, redirect to login handlebars page
// if on route and user is logged in, redirect to home page
router.get('/', async (req, res) => {
    try {
      res.render('homepage', {
        loggedIn: req.session.loggedIn,
        username: req.session.username,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/sign-up', (req, res) => {
    res.render('sign-up');
});




module.exports = router;