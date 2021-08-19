const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const registryRoutes = require('./regisrtry-routes');
const aboutRoutes = require('./about-routes');
const chooseCategory = require('./choose-category-routes');
const createRegistry = require('./create-registry-routes');
const contactRoutes = require('./contact-routes');
const profileRoutes = require('./profile-routes');
const ideasRoute = require('./ideas-route');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/registries', registryRoutes);
router.use('/about', aboutRoutes);
router.use('/choose-category', chooseCategory);
router.use('/user/profile', profileRoutes);
router.use('/contact', contactRoutes);
router.use('/*/create-registry/', createRegistry);
router.use('/ideas', ideasRoute);


module.exports = router;