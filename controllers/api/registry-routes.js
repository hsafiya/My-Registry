const router = require('express').Router();
const { Registry, Category, Item, User, UserRegistry } = require('../../models');

// The `/api/registry` endpoint

// get all registries and include users that owns them, category and items 
router.get('/', (req, res) => {
    // find all tags
    Registry.findAll({
        include: [
            {
                model: User,
                include: {
                    model: Category
                }
            },
            {
                model: Item
            }
        ]
    })
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});



module.exports = router;
