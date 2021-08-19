const router = require('express').Router();

router.get('/', (req, res) => {
    if (req.session.logged) {
        res.render('contact', {
            logged: req.session.logged
        })
        return;
    };
    res.render('contact')
})

module.exports = router;