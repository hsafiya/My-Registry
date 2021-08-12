const router = require ('express').Router();

const {User,Category, Registry, Item, RegistryCategories} = require ('../models')
// get all registries
router.get('/', (req,res) => {
    Registry.findAll({
        include:[{
            model:User,
            attributes:['id','username']
        }]
    })
})

module.exports = router;