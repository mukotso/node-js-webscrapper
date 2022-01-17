const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('web_scrapper', 'kelvin@localhost', 'Mukotso1617?', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3307
});
module.exports = sequelize;