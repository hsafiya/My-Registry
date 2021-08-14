const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Category, Registry, Item, RegistryCategories } = require('../models')
//get all categories
router.get('/',withAuth, (req, res) => {
    Category.findAll({

    }).then(dbCategoryData => {
        const chooseCategory = dbCategoryData.map(post => post.get({ plain: true })) ;
        // register req.session.logged for nav buttons to show properly
        if (req.session.logged) {
            res.render('choose-category', {                
                logged: req.session.logged,
                chooseCategory
            })
            return;
        };
        res.render('homepage')
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
    module.exports = router;