const router = require('express').Router();

router.get('/', (req, res) => {
    if (req.session.logged) {
        res.render('about', {
            logged: req.session.logged
        })
        return;
    };
    res.render('about')
})

module.exports = router;