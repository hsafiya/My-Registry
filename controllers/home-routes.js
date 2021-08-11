const router = require('express').Router();

// render homepage
router.get('/', (req,res) => {
    console.log(req.session);
    res.render('homepage')
})

router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }

    res.render('login');
});
module.exports = router;
