const User = require('./User');
const Category = require('./Category');
const Registry = require('./Registry');
const UserRegistry =require('./UserRegistry');
const Item = require('./Item');

// create relations beetwen models

// multiple users can sign for a category
User.belongsTo(Category);
// one category can have multiple users
Category.hasMany(User);

User.belongsToMany(Registry, {
    through: UserRegistry,
    onDelete: 'CASCADE'
});
Registry.belongsToMany(User, {
    through: UserRegistry,
});
UserRegistry.belongsTo(User);
UserRegistry.belongsTo(Registry);
User.hasMany(UserRegistry);
Registry.hasMany(UserRegistry);

Registry.hasMany(Item);
Item.belongsTo(Registry);

module.exports = { User, Category, Registry, UserRegistry, Item };
