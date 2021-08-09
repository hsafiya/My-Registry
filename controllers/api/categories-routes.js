const router = require('express').Router();
const { Category, User } = require('../../models');

// the endpoint: `/api/categories`

router.get('/', (req, res) => {
    // find all categories
    Category.findAll({
        include: [
            {
                model: User
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
