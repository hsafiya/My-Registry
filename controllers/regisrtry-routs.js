const router = require ('express').Router();

const {User,Category, Registry, Item, RegistryCategories} = require ('../models')
// get all registries
router.get('/', (req,res) => {
    Registry.findAll({
        include:[{
            model:User,
            attributes:['id','username']
        },
        {model:Category,
        attributes:['category_name'],
        through: {
            attributes:[]
        }
        }
    ]
    })
    .then(dbRegistryData => {const registries = dbRegistryData.map(post =>post.get({plain:true})) 
res.render('registries',{registries})
})

})

module.exports = router;