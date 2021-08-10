const sequelize = require('../config/connection');
const { Registry } = require('../models');

const regdata = [
    {
        title: '1st',
        user_id: 1
    },
    {
        title: '2nd',
        user_id: 2
    },
    {
        title: '3rd',
        user_id: 1
    },
    {
        title: '4th',
        user_id: 2
    }
];

const seedReg = () => Registry.bulkCreate(regdata);

module.exports = seedReg;
