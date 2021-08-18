const router = require('express').Router();

router.get('/', (req, res) => {
    if (req.session.logged) {
        res.render('ideas', {
            logged: req.session.logged
        })
        return;
    };
    res.render('ideas')
})

module.exports = router;