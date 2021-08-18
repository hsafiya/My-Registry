const router = require('express').Router();
const { Registry, Item, Category, User } = require('../models');

router.get('/', (req, res) => {
    Item.findAll({
        attributes: ['id', 'item_name', 'item_url', 'bought', 'registry_id'],
        include: [
            {
                model: Registry,
                attributes: ['title', 'address', 'event_date',],
                include: [
                    {
                        model: User,
                        attributes: { exclude: ['password'] }
                    },
                    {
                        model: Category,
                        attributes: ['category_name']
                    }
                ]
            },

        ]
    }).then(dbItemData => {
        const items = dbItemData.map(item => item.get({ plain: true }));
        const ownerId = items[0].registry.user.id
        // res.json(items);
        console.log(ownerId + '--' + req.session.user_id);
        if (req.session.logged && req.session.user_id === ownerId) {
            res.render('dashboard', {
                logged: req.session.logged,
                items
            });
            return
        } else if (req.session.logged && req.session.user_id !== ownerId) {
            res.render('guest-dashboard', {
                logged: req.session.logged,
                items
            });
            return
        } else {
            res.render('login');
            return
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router;