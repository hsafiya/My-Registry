const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const categoryRoutes = require('./categories-routes.js');
const registryRoutes = require('./registry-routes');
const itemRoutes = require('./item-routes');


router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/registries', registryRoutes);
router.use('/items', itemRoutes);

module.exports = router;