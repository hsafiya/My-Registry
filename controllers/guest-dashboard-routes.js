const router = require('express').Router();
const { Registry, Item, Category } = require('../models');

router.get('/', (req, res) => {
    Item.findAll({
        attributes: ['id', 'item_name', 'item_url', 'bought', 'registry_id'],
        include: [
            {
                model: Registry,
                attributes: ['title', 'address', 'event_date',],
                include: [
                    {
                        model: Category,
                        attributes: ['category_name']
                    }
                ]
            },

        ]
    }).then(dbItemData => {
        const items = dbItemData.map(item => item.get({ plain: true }));

        // res.json(items);

        if (req.session.logged) {
            res.render('guest-dashboard', {
                logged: req.session.logged,
                items
            })
            return;
        };
        res.render('login')
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router;