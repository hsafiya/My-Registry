const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class RegistryCategories extends Model { }

RegistryCategories.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
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
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    }
);

module.exports = RegistryCategories;
