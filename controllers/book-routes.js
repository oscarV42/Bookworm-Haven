const router = require('express').Router();
const { User, Book } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', withAuth, async (req, res) => {
  try {
    const dbBookData = await Book.findAll({
      where: {
        user_id: req.session.user_id
      },
      attributes: [
        'id',
        'title',
        'author',
        'publisher',
        'published_date',
        'genre'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        },
      ]
    });

    const mybooks = dbBookData.map((book) => book.get({ plain: true }));
    console.log("My favorite books:", mybooks);
    res.render('mybooklist', { mybooks, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await Book.create({
      title: req.body.title,
      author: req.body.author,
      publisher: req.body.publisher,
      publishedDate: req.body.publishedDate,
      genre: req.body.genre,
      img: req.body.img,
      user_id: req.session.user_id,
    });
    console.log('Add new book POST', dbPostData);
    res.status(200).json(dbPostData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;