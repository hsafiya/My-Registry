const router = require('express').Router();

const { User, Category, Registry, Item, RegistryCategories } = require('../models')
//get all categories
router.get('/', (req, res) => {
    Category.findAll({

    }).then(dbCategoryData => {
        const chooseCategory = dbCategoryData.map(post => post.get({ plain: true })) ;
        // res.json(chooseCategory);
        res.render('choose-category', { chooseCategory })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});
    module.exports = router;