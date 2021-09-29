const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashRoutes = require('./dash-routes');
const blogRoutes = require('./blog-routes');
const searchRoutes = require('./search-routes');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/blogs', blogRoutes); 
router.use('/dashboard', dashRoutes)
router.use('/search', searchRoutes);

module.exports = router;