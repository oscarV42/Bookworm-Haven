const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const bookRoutes = require('./book-routes');
const blogRoutes = require('./blog-routes');
const searchRoutes = require('./search-routes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/blogs', blogRoutes); 
router.use('/book', bookRoutes)
router.use('/search', searchRoutes);

module.exports = router;