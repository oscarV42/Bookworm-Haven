const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    try {
      res.render('blogHome', {
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  router.get('/:id', async (req, res) => {
    try {
      res.render('bookblog', {
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


module.exports = router;