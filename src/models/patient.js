const connection = require('../database');
const { Sequelize } = require('sequelize');

const Patient = connection.define('patient', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fullName: {
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
        unique:true
    },
    contact: {
        type: Sequelize.STRING
    },
    emergencyContact:{
        type: Sequelize.STRING,
        // em caso não se utilizar o yup para validação, usar o comando abaixo para tornar o campo obrigatório
        //allowNull: false

    },
    allergyList:{
        type: Sequelize.STRING
    },
    specialCares:{
        type: Sequelize.STRING
    },
    insurance:{
        type: Sequelize.STRING
    },
    status:{
        type: Sequelize.ENUM("AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO","NÃO_ATENDIDO")
    },
    servicesCount:{
        type: Sequelize.INTEGER,
        defaultValue: 0
    }

})
 
module.exports = Patient;