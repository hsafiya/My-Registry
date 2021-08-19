const sequelize = require('../config/connection');
const { Registry } = require('../models');

const regdata = [
    {
        title: 'victor and co',
        address: '123 add str, city st', 
        publish:1,
        user_id: 1
    },
    {
        title: '2nd',
        address: '123 add str, city st',
        publish: 1,
        user_id: 2
    },
    {
        title: '3rd',
        address: '123 add str, city st',
        publish: 1,
        user_id: 1
    },
    {
        title: '4th',
        address: '123 add str, city st',
        publish: 1,
        user_id: 2
    }
];

const seedReg = () => Registry.bulkCreate(regdata);

module.exports = seedReg;
