const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class UserRegistry extends Model { }

// create fields/columns for Registry model
UserRegistry.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        registry_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'registry',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'userregistry'
    }
);


module.exports = UserRegistry;
