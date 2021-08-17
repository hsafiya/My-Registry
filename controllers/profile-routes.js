const { User } = require('../models');

const router = require('express').Router();

router.get('/', (req, res) => {
    User.findOne({
        where: {
            id: req.session.user_id
        }
    }).then(dbUserData => {
        const user = dbUserData.get({plain:true});
        if (req.session.logged) {
            res.render('profile', {
                user,
                logged: req.session.logged,
                user_id: req.session.user_id
            })
            return;
        };
        res.render('login')
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })    
})

module.exports = router;