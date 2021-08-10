const User = require('./User');
const Category = require('./Category');
const Registry = require('./Registry');
const Item = require('./Item');
const RegistryCategories = require('./Registry-Categories');//intermediary model

// create relations beetwen models

// user has many registries and registries belong to the user that created them
User.hasMany(Registry);
Registry.belongsTo(User);

// registries can belong to many categories and each category can have multiple registries
Registry.belongsToMany(Category, { through: RegistryCategories})

// registry has many items, and items belong to registry user is in
Registry.hasMany(Item);
Item.belongsTo(Registry);

module.exports = { User, Category, Registry, Item, RegistryCategories };
