const Sequelize = require('sequelize');
const connection = require('../database');

const Doctor = connection.define('doctor', {

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    fullName:{
        type: Sequelize.STRING
    },
    gender:{
        type: Sequelize.ENUM("MASCULINO", "FEMININO", "OUTRO", "PREFIRO_NÃO_INFORMAR")
    },
    birthDate:{
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        unique: true
    },
    contact:{
        type: Sequelize.STRING
    },
    gradInstitution:{
        type: Sequelize.STRING,
        allowNull: false
    },
    crmUf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    specialization:{
        type: Sequelize.ENUM('CLINICO_GERAL', 'ANESTESISTA', 'DERMATOLOGIA', 'GINECOLOGIA', 'NEUROLOGIA', 'PEDIATRIA', 'PSIQUIATRIA', 'ORTOPEDIA'),
    },
    status: {
        type: Sequelize.ENUM('ATIVO', 'INATIVO'),
        defaultValue: "ATIVO" 
    },
    servicesCount:{
        type: Sequelize.INTEGER
        //FALTA COMPLEMENTAR COM OS OUTROS REQUISITOS LISTADOS EM S07
    }
})

module.exports = Doctor;