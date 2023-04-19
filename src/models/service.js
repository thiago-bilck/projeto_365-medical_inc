const Sequelize = require('sequelize');
const connection = require('../database/');
const Patient = require('../models/patient');
const Doctor = require('../models/doctor');

const Service = connection.define('service', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    patientId:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    doctorId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

})

Service.belongsTo(Patient);
Service.belongsTo(Doctor);

module.exports = Service;