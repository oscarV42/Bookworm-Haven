const router = require('express').Router();
const { User, Book, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Book.findAll({
      // where: {
      //   id: 5
      // },
      //raw: true,
      attributes: [
        'id',
        'title',
        'author',
        'publisher',
        'published_date',
        'genre',
        'img',
        'user_id',
      ],
      include: [
        {
          model: Post,
          attributes: ['postDescription', 'book_id'],
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const books = dbBlogData.map((blog) =>
      blog.get({ plain: true })
    );
    //const blog = dbBlogData.get({ plain: true });

    console.log("from Blog", books);
    res.render('blog', {
      books,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;