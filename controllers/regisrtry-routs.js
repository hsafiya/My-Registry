const router = require('express').Router();
const sequelize = require('../config/connection');

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
        const registries = dbRegistryData.map(post => post.get({ plain: true }));
        if (req.session.logged) {
            res.render('registries', {
                logged: req.session.logged,
                registries
            })
            return;
        };
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
        if (req.session.logged) {
            res.render('wed-regs', {
                logged: req.session.logged,
                catName
            })
            return;
        };
        res.render('wed-regs', { catName })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// birthday
router.get('/birthday-registries', (req, res) => {
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
        const catName = registries.filter(cat => cat.categories[0].category_name === 'birthday');
        if (req.session.logged) {
            res.render('bday-regs', {
                logged: req.session.logged,
                catName
            })
            return;
        };

        res.render('bday-regs', { catName })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// baby-shower
router.get('/baby-shower-registries', (req, res) => {
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
        const catName = registries.filter(cat => cat.categories[0].category_name === 'baby-shower');
        if (req.session.logged) {
            res.render('bshower-regs', {
                logged: req.session.logged,
                catName
            })
            return;
        };
        res.render('bshower-regs', { catName })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// xmas
router.get('/xmas-registries', (req, res) => {
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
        const catName = registries.filter(cat => cat.categories[0].category_name === 'xmas');
        if (req.session.logged) {
            res.render('xmas-regs', {
                logged: req.session.logged,
                catName
            })
            return;
        };
        res.render('xmas-regs', { catName })
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// get a registry by title
router.get('/:title', (req, res) => {
    Registry.findAll({
        where: {
            title:
                sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), 'LIKE', '%' + req.params.title + '%')
        },
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            },
            {
                model: Category
            }
        ]
    }).then(dbRegistryData => {
        const registries = dbRegistryData.map(post => post.get({ plain: true }));
        if (req.session.logged) {
            res.render('registries', {
                logged: req.session.logged,
                registries
            })
            return;
        };
        res.render('registries', { registries });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;