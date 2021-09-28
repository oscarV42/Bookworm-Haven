const router = require('express').Router();

const userRoutes = require('./user-routes');

//for signup and login
router.use('/users', userRoutes);

module.exports = router;