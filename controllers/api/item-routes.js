const router = require('express').Router();
const { Registry, Category, Item, User, RegistryCategories } = require('../../models');
const withAuth = require('../../utils/auth');


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
    }).then(dbItemData => res.json(dbItemData)).catch(err => {
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
    }).then(dbItemData => {
        if (!dbItemData) {
            res.status(404).json({ message: 'No registry found with this id' });
            return;
        }
        res.json(dbItemData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// add a item
router.post('/', withAuth, (req, res) => {

    Item.create({
        item_name: req.body.item_name,
        item_url: req.body.item_url,
    }).then(dbItemData => res.json(dbItemData)).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// update an item
router.put('/:id', withAuth, (req, res) => {
    Item.update(
        {
            item_name: req.body.item_name,
            item_url: req.body.item_url,
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(dbData => {
        if (!dbData) {
            res.status(404).json({ message: 'No category found with this id' });
            return;
        }
        res.json(dbData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// delete a item
router.delete('/:id', withAuth, (req, res) => {
    Item.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbItemData => {
        if (!dbItemData) {
            res.status(404).json({ message: 'No registry found with this id' });
            return;
        }
        res.json(dbItemData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;