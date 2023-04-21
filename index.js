require('dotenv').config();
const PORT = process.env.PORT || 3500//usando a porta da variável de ambiente ou se não houver, usar por padrao a 3500
const express = require('express');


const connection = require('./src/database');

const Patient = require('./src/models/patient');
const createPatient = require('./src/controllers/patients/createPatient');
const validateNewPatient = require('./src/middlewares/patient/validateNewPatient');
const updatePatientData = require('./src/controllers/patients/updatePatientData');
const validateUpdatePatient = require('./src/middlewares/patient/validateUpdatePatientData');
const updateStatus = require('./src/controllers/patients/updateStatus');
const findAllPatient = require('./src/controllers/patients/findAllPatient');
const findPatientById = require('./src/controllers/patients/findPatientById');
const deletePatient = require('./src/controllers/patients/deletePatient');

const Doctor = require('./src/models/doctor');
const createDoctor = require('./src/controllers/doctor/createDoctor');
const validateNewDoctor = require('./src/middlewares/doctor/validateNewDoctor');
const updateDoctorData = require('./src/controllers/doctor/updateDoctorData');
const validateUpdateDoctorData = require('./src/middlewares/doctor/validateUpdateDoctorData');
const updateDoctorStatus = require('./src/controllers/doctor/updateDoctorStatus');
const findAllDoctors = require('./src/controllers/doctor/findAllDoctors');
const findDoctorById = require('./src/controllers/doctor/findDoctorById');
const deleteDoctor = require('./src/controllers/doctor/deleteDoctor');
const createService = require('./src/controllers/services/createService');

const Nurse = require('./src/models/nurse');
const createNurse = require('./src/controllers/nurse/createNurse');
const validateNewNurse = require('./src/middlewares/nurse/validateNewNurse');
const updateNurseData = require('./src/controllers/nurse/updateNurseData');
const validateUpdateNurseData = require('./src/middlewares/nurse/validateUpdateNurseData.js');
const findAllNurses = require('./src/controllers/nurse/findAllNurse');
const findNurseById = require('./src/controllers/nurse/findNurseById');
const deleteNurse = require('./src/controllers/nurse/deleteNurse');


//importar o model Service depois

const app = express();

app.use(express.json());

connection.authenticate();
connection.sync({alter: true});


app.post('/api/patient', validateNewPatient, createPatient);
app.put('/api/patient/:id', validateUpdatePatient, updatePatientData);
app.put('/api/patient/:id/status', updateStatus);
app.get('/api/patient', findAllPatient);
app.get('/api/patient/:id', findPatientById);
app.delete('/api/patient/:id', deletePatient);

app.post('/api/doctor', validateNewDoctor, createDoctor);
app.put('/api/doctor/:id', validateUpdateDoctorData, updateDoctorData);
app.put('/api/doctor/:id/status', updateDoctorStatus);
app.get('/api/doctor', findAllDoctors);
app.get('/api/doctor/:id', findDoctorById);
app.delete('/api/doctor/:id', deleteDoctor);

app.post('/api/nurse', validateNewNurse, createNurse);
app.put('/api/nurse/:id', validateUpdateNurseData, updateNurseData);
app.get('/api/nurse', findAllNurses);
app.get('/api/nurse/:id', findNurseById);
app.delete('/api/nurse/:id', deleteNurse)

app.post('/api/service', createService)


app.listen(PORT, () => console.log("Servidor Online na porta "+PORT))