const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PetVac extends Model { }

PetVac.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_received: {
            type: DataTypes.DATE,
            allowNull: false
        },
        expiration_date: {
            type: DataTypes.DATE,
            allowNull: false
        },

    }, {
    sequelize
});

module.exports = PetVac