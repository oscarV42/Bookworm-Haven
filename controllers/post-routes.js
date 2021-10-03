const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.create({
      postDescription: req.body.postDescription,
      book_id: req.body.book_id,
      user_id: req.session.user_id,
    });
    console.log('Add new POST', dbPostData);
    res.status(200).json(dbPostData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;