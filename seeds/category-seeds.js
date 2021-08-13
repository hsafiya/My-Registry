const sequelize = require('../config/connection');
const { Category } = require('../models');

const catdata = [
    {
        category_name: 'wedding'
    },
    {
        category_name: 'birthday'
    },
    {
        category_name: 'baby-shower'
    },
    {
        category_name: 'xmas'
    }
];

const seedCat = () => Category.bulkCreate(catdata);

module.exports = seedCat;
