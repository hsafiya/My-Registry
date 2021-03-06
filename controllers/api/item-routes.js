const router = require('express').Router();
const { Registry, Item } = require('../../models');
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
router.get('/:name', (req, res) => {
    Item.findOne({
        where: {
            item_name: req.params.name
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
        registry_id: req.body.registry_id
    }).then(dbItemData => res.json(dbItemData)).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// update an item
router.put('/:id', withAuth, (req, res) => {
    Item.update(req.body,       
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