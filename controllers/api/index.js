const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const categoryRoutes = require('./categories-routes.js');


router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;