const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model { }

Pet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bread: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "#bada55"
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "Pet",

});

module.exports = Pet