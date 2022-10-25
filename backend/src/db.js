const Sequelize = require('sequelize');
const database = new Sequelize('produtos', 'root', '123456', 
    {
        dialect: 'mysql', host: '192.168.31.180'
    });

    database.sync();

module.exports = database;