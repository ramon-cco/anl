const sequelize = require('sequelize');
const database = require('../db');
const shema=""

class Produto extends sequelize.Model{}


Produto.init(
    {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: sequelize.STRING,
            allowNull: false
        },
        funcionario: {
            type: sequelize.STRING,
            allowNull: true
        },
        observacoes: {
            type: sequelize.STRING,
            allowNull: true
        },
        codigo: {
            type: sequelize.STRING,
            allowNull: true
        },
        images: {
            type: sequelize.BLOB,
            allowNull: true
        }
    },
    {
        sequelize : database, modelName : tbProduto, shema
    }
)


module.exports = Produto;