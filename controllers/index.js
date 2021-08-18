const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const registryRouts = require('./regisrtry-routs');
const aboutRoutes = require('./about-routes');
const chooseCategory = require('./choose-category-routes');
const createRegistry = require('./create-registry-routes');
const contactRoutes = require('./contact-routes');
const dashboardRoutes = require('./dashboard-routes');
const profileRoutes = require('./profile-routes');
const ideasRoute = require('./ideas-route');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/registries', registryRouts);
router.use('/about', aboutRoutes);
router.use('/choose-category', chooseCategory);
router.use('/user/profile', profileRoutes);
router.use('/contact', contactRoutes);
router.use('/*/create-registry/', createRegistry);
router.use('/*/dashboard', dashboardRoutes);
router.use('/ideas', ideasRoute);


module.exports = router;