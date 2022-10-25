const sequelize = require('sequelize');
const database = require('../db');
const shema=""

class Produto extends sequelize.Model{}


Produto.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        funcionario: {
            type: Sequelize.STRING,
            allowNull: true
        },
        observacoes: {
            type: Sequelize.STRING,
            allowNull: true
        },
        codigo: {
            type: Sequelize.STRING,
            allowNull: true
        },
        images: {
            type: Sequelize.BLOB,
            allowNull: true
        }
    },
    {
        sequelize : database, modelName : tbProduto, shema
    }
)


module.exports = Produto;