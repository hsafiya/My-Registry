const router = require('express').Router();
const { Registry, Category, Item, User, RegistryCategories } = require('../../models');


// The `/api/items` endpoint

router.get('/', (req, res) => {
    // find all tags
    Item.findAll({
        attributes: ['id', 'item_name', 'item_url', 'bought', 'registry_id'],
        include: [
            {
                model: Registry,
                attributes: ['title']
            },
           
        ]
    })
        .then(dbItemData => res.json(dbItemData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


// find one  item
router.get('/:id', (req, res) => {
    Item.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'item_name', 'item_url', 'bought', 'registry_id'],
        include: [
            {
                model: Registry,
                attributes: ['title']
            },
        ]
    })
        .then(dbItemData => {
            if (!dbItemData) {
                res.status(404).json({ message: 'No registry found with this id' });
                return;
            }
            res.json(dbItemData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
}); 

// add a item
router.post('/', (req, res) => {

    Item.create({
        item_name: req.body.item_name,
        item_url: req.body.item_url,
    })
        .then(dbItemData => res.json(dbItemData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


 


module.exports = router;