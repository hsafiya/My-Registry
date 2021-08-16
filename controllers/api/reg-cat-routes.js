const router = require('express').Router();
const {  RegistryCategories } = require('../../models');

// add an association
router.post('/', (req, res) => {
    RegistryCategories.create({
        category_id: req.body.category_id,
        registry_id: req.body.registry_id,
    }).then(dbAssociationData => res.json(dbAssociationData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
