const router = require('express').Router();
const { Category, User } = require('../../models');

// the endpoint: `/api/categories`

// get all categories
router.get('/', (req, res) => {
    // find all categories
    Category.findAll({})
        .then(data => res.json(data))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// add new category
router.post('/', (req, res) => {
    // expects { category_name: 'wedding', user_id: '1'}
    // create a new category
    Category.create({
        category_name: req.body.category_name
    }).then(dbData => res.json(dbData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
    Category.update(
        {
            category_name: req.body.category_name
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbData => {
            if (!dbData) {
                res.status(404).json({ message: 'No category found with this id' });
                return;
            }
            res.json(dbData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});




module.exports = router;
