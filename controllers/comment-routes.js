const router = require('express').Router();
const { User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const dbCommentData = await Comment.create({
      commentDescription: req.body.commentDescription,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });
    console.log('Add new COMMENT', dbCommentData);
    res.status(200).json(dbCommentData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;