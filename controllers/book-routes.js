const router = require('express').Router();
const { User, Book } = require('../models');
const withAuth = require('../utils/auth');


// router.get('/', async (req, res) => {
//     try {
//       res.render('dashboard', {
//         loggedIn: req.session.loggedIn,
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

router.post('/', withAuth, async (req, res) =>{
    try {
      const dbPostData = await Book.create({
         title: req.body.title, 
         author: req.body.author,
         publisher: req.body.publisher,
         publishedDate: req.body.publishedDate,
         genre: req.body.genre,
         img: req.body.img,
         user_id :req.session.user_id,
      });
      console.log('Add new book POST', dbPostData);
      res.status(200).json(dbPostData)
    }catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
});

  module.exports = router;