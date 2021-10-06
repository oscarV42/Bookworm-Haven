const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.create({
      postDescription: req.body.postDescription,
      book_id: req.body.book_id,
      user_id: req.session.user_id,
      username: req.session.username
    });
    console.log('Add new POST', dbPostData);
    res.status(200).json(dbPostData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'postDescription',
        'user_id',
        'book_id',
        'created_at',
        'updated_at'
      ],
      include: [
        {
          model: User,
          attributes: ['username']
        },
      ]
    });

    const currentPost = dbPostData.get({ plain: true });
    console.log("Current Post:", currentPost);
    res.render('comment', { currentPost, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;