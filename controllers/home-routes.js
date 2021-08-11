const router = require('express').Router();

// render homepage
router.get('/', (req,res) => {
    res.render('homepage')
})


module.exports = router;
