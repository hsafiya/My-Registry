const router = require('express').Router();

const { User, Category, Registry, Item, RegistryCategories } = require('../models')

router.get('/', (req, res) => {
    Category.findAll({

        
    }) .then(dbAboutData => {
        const about = dbAboutData.map(post => post.get({ plain: true }))
        res.render('about', { about })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})



module.exports = router;