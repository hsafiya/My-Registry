const router = require('express').Router();

router.get('/', (req, res) => {
    if (req.session.logged) {
        res.render('dashboard', {
            logged: req.session.logged
        })
        return;
    };
    res.render('homepage')
})

module.exports = router;