const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const registryRouts = require('./regisrtry-routs');
const aboutRoutes = require('./about-routes');
const chooseCategory = require('./choose-category-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/registries', registryRouts);
router.use('/about', aboutRoutes);
router.use('/choose-category', chooseCategory);

module.exports = router;