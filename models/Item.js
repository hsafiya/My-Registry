const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model { }

Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        item_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        item_url: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                isURL: true
            }
        },
        bought: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
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
        modelName: 'item',
    }
);

module.exports = Item;
