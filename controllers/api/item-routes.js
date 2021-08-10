const router = require('express').Router();
const { Registry, Category, Item, User, RegistryCategories } = require('../../models');


// The `/api/items` endpoint

router.get('/', (req, res) => {
    // find all tags
    Item.findAll({
        attributes: ['id', 'item_name', 'item_url'],
        include: [
            {
                model: Registry,
                attributes: ['id', 'title']
            },
           
        ]
    })
        .then(dbItemData => res.json(dbItemData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


module.exports = router;