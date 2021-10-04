const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const bookRoutes = require('./book-routes');
const blogRoutes = require('./blog-routes');
const searchRoutes = require('./search-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/blog', blogRoutes); 
router.use('/book', bookRoutes)
router.use('/search', searchRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;