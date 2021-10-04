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
        'user_id',
      ],
      include: [
        {
          model: Post,
          attributes: ['postDescription', 'book_id'],
        },
      ],
    });

    const blog = dbBlogData.map((blog) =>
      blog.get({ plain: true })
    );
    //const blog = dbBlogData.get({ plain: true });

    console.log("from Blog", blog);
    res.render('blog', {
      blog,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;