const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Progress extends Model { }

Progress.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        runProgress: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        walkProgress: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bikeProgress: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'progress'
    }
)

module.exports = Progress;