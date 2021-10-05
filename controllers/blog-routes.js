const router = require('express').Router();
const { User, Book, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Book.findAll({
      // where: {
      //   id: 5
      // },
      // raw: true,
      // nest:true,
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
          attributes: [
            'id',
            'postDescription',
            'user_id',
            'book_id',
            'created_at',
          ],
          include: [
            {
              model: Comment,
              attributes: [
                'id',
                'commentDescription',
                'user_id',
                'post_id',
                'created_at',
              ],
            },
          ]
        },
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const books = dbBlogData.map((blog) => {
      const blogItems = blog.get({ plain: true })
      if (blog.posts.length) {
        const blogPosts = blog.posts.map((post) => {
          const postItems = post.get({ plain: true })
          if (post.comments.length) {
            const blogComments = post.comments.map((cmt) => cmt.get({ plain: true }));
            postItems.comments = blogComments;
          }
          return postItems;
        });
        blogItems.posts = blogPosts;
      }
      return blogItems;
    });
    books.forEach((book) => {
      console.log(book);
    })
    res.render('blog', {
      books, loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;