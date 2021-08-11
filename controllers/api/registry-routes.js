const router = require('express').Router();
const { Registry, Category, Item, User, RegistryCategories } = require('../../models');

// The `/api/registries` endpoint

// get all registries and include users that owns them, category and items 
router.get('/', (req, res) => {
    // find all tags
    Registry.findAll({
        attributes: ['id', 'title'],
        include: [
            {
                model: User,
                attributes: { exclude: ['password'] }
            },
            {
                model: Category,
                attributes: ['id', 'category_name'],
                through: {
                    attributes: []
                }
            },
            {
                model: Item
            }
        ]
    })
        .then(dbRegistryData => res.json(dbRegistryData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});






// add a registry
router.post('/', (req, res) => {
    // expects {title: 'user's registry', user_id: '1'}
    // dummy data to use in insomnia
    // {
    //     "title": "user's registry",
    //     "user_id": "1"
    // }
    Registry.create({
        title: req.body.title,
        user_id: req.body.user_id,
    })
        .then(dbRegistryData => res.json(dbRegistryData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete a registry
router.delete('/:id', (req, res) => {
    Registry.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbRegistryData => {
            if (!dbRegistryData) {
                res.status(404).json({ message: 'No registry found with this id' });
                return;
            }
            res.json(dbRegistryData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
