const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Registry extends Model { }

// create fields/columns for Registry model
Registry.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'registry'
    }
);


module.exports = Registry;
