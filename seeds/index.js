const seedCategories = require('./category-seeds');
const seedUsers = require('./user-seeds');
const seedReg = require('./reg-seeds');
const seedItem = require('./item-seeds');
const seedRegCat = require('./reg-cat-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');

    await seedUsers();
    console.log('\n----- Users SEEDED -----\n');

    await seedReg();
    console.log('\n----- Regs SEEDED -----\n');

    await seedItem();
    console.log('\n----- Items SEEDED -----\n');

    await seedRegCat();
    console.log('\n----- Intermediary table SEEDED -----\n');

    process.exit(0);
};

seedAll();
