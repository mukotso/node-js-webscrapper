//create properties table


const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');
const property = sequelize.define('properties', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
        title: DataTypes.STRING,
        image: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.STRING,
        details: DataTypes.STRING,
        caption: DataTypes.STRING,
});

//export
module.exports = property;