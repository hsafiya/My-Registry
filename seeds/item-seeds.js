const { Item } = require('../models');

const itemData = [
    {
        item_name: 'Shirts',
        item_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        bought:0,
        reg_id:1
    },
    {
        item_name: 'Shorts',
        item_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        bought: 0,
        reg_id: 1
        },
    {
        item_name: 'Music',
        item_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        bought: 0,
        reg_id: 2
       },
    {
        item_name: 'Hats',
        item_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        bought: 0,
        reg_id: 2
    },
    {
        item_name: 'Shoes',
        item_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        bought: 0,
        reg_id: 1
        }
];

const seedItem = () => Item.bulkCreate(itemData);

module.exports = seedItem;
