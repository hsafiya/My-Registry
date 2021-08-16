const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/',withAuth, (req, res) => {
    if(req.session.logged) {
        res.render('create-registry', {                
            logged: req.session.logged
        })
        return;
    };
    res.render('login')
});

module.exports = router;