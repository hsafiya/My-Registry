const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
    {
        username: 'vic',
        email: 'vic@email.com',
        password: 'password123'
    },
    {
        username: 'nath',
        email: 'nath@email.com',
        password: 'password123'
    },
    {
        username: 'meht',
        email: 'meht@last.fm',
        password: 'password123'
    },
    {
        username: 'darn',
        email: 'darn@goo.ne.jp',
        password: 'password123'
    },
    {
        username: 'boo',
        email: 'boo@weather.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
