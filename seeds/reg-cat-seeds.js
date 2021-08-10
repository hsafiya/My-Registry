const sequelize = require('../config/connection');
const { RegistryCategories } = require('../models');

const regcatdata = [
    {
        category_id: 1,
        registry_id: 1
    },
    {
        category_id: 1,
        registry_id: 2
    },
    {
        category_id: 2,
        registry_id: 3
    },
    {
        category_id: 3,
        registry_id: 2
    }
];

const seedRegCat = () => RegistryCategories.bulkCreate(regcatdata);

module.exports = seedRegCat;