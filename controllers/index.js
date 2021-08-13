const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const registryRouts = require('./regisrtry-routs');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/registries', registryRouts);


module.exports = router;