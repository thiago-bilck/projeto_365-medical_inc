require('dotenv').config();
const PORT = process.env.PORT || 3500//usando a porta da variável de ambiente ou se não houver, usar por padrao a 3500
const express = require('express');


const connection = require('./src/database');

const Patient = require('./src/models/patient');
const createPatient = require('./src/controllers/patients/createPatient');
const validateNewPatient = require('./src/middlewares/patient/validateNewPatient');
const updatePatientData = require('./src/controllers/patients/updatePatientData');
const validateUpdatePatient = require('./src/middlewares/patient/validateUpdatePatient');
const updateStatus = require('./src/controllers/patients/updateStatus');
const findAllPatient = require('./src/controllers/patients/findAllPatient');
const findPatientById = require('./src/controllers/patients/findPatientById');
const deletePatient = require('./src/controllers/patients/deletePatient');

const Doctor = require('./src/models/doctor');
const createDoctor = require('./src/controllers/doctor/createDoctor');
const validateNewDoctor = require('./src/middlewares/doctor/validateNewDoctor')

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


app.listen(PORT, () => console.log("Servidor Online na porta "+PORT))