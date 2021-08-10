const User = require('./User');
const Category = require('./Category');
const Registry = require('./Registry');
const Item = require('./Item');
const RegistryCategories = require('./Registry-Categories');//intermediary model

// create relations beetwen models

// user has many registries and registries belong to the user that created them
User.hasMany(Registry, {
    foreignKey: 'user_id',
});
Registry.belongsTo(User, {
    foreignKey: 'user_id',
});

// registries can belong to many categories and each category can have multiple registries
Registry.belongsToMany(Category, {
    through: RegistryCategories,
    foreignKey: 'registry_id'
});

// Just in case, idk if is needed, lol
// Category.belongsToMany(Registry, {
//     through: RegistryCategories,
//     foreignKey: 'category_id'
// });

// registry has many items, and items belong to registry user is in
Registry.hasMany(Item, {
    foreignKey: 'registry_id',
});
Item.belongsTo(Registry, {
    foreignKey: 'registry_id',
});

module.exports = { User, Category, Registry, Item, RegistryCategories };
