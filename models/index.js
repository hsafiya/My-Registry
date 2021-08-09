const User = require('./User');
const Category = require('./Category');

// create relations beetwen models
// one user has many categories
User.hasMany(Category, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
// single category belongs to one user 
Category.belongsTo(User, {
    foreignKey:'user_id',
    onDelete: 'SET NULL'
});




module.exports = { User, Category };
