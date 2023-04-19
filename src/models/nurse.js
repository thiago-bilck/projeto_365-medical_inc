const Sequelize = require("sequelize");

const connection = require('../database');

const Nurse = connection.define('nurse', {

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    fullName:{
        type: Sequelize.STRING
    },
    gender: {
        type: Sequelize.ENUM("MASCULINO", "FEMININO", "OUTRO", "PREFIRO_NÃO_INFORMAR")
    },
    birthDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    contact: {
        type: Sequelize.STRING
    },
    gradInstitution: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cofenUf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }


})

module.exports = Nurse;