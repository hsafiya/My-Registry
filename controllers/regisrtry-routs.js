const router = require('express').Router();

const { User, Category, Registry, Item, RegistryCategories } = require('../models')
// get all registries
router.get('/', (req, res) => {
    Registry.findAll({
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            },
            {
                model: Category
            },
            {
                model: Item
            }
        ]
    }).then(dbRegistryData => {
        const registries = dbRegistryData.map(post => post.get({ plain: true }))
        res.render('registries', { registries })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// filter by category name
// wedding
router.get('/wedding-registries', (req, res) => {
    Registry.findAll({
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            },
            {
                model: Category
            },
            {
                model: Item
            }
        ]
    }).then(dbRegistryData => {
        const registries = dbRegistryData.map(post => post.get({ plain: true }));
        const catName = registries.filter(cat => cat.categories[0].category_name === 'wedding');

        res.render('wed-regs', { catName })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});
