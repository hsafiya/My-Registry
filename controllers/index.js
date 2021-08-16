const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const registryRouts = require('./regisrtry-routs');
const aboutRoutes = require('./about-routes');
const chooseCategory = require('./choose-category-routes');
const createRegistry = require('./create-registry-routes');
const contactRoutes = require('./contact-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/registries', registryRouts);
router.use('/about', aboutRoutes);
router.use('/choose-category', chooseCategory);
router.use('/*/create-registry/', createRegistry);
router.use('/contact', contactRoutes);

module.exports = router;