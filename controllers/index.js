const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const registryRouts = require('./regisrtry-routs');
const aboutRoutes = require('./about-routes');



router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/registries', registryRouts);
router.use('/about', aboutRoutes);


module.exports = router;