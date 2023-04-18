const Patient = require('../../models/patient');

async function createPatient(req,res){

    const data = {

        fullName: req.body.fullName,
        gender: req.body.gender,
        birthDate: req.body.birthDate,
        cpf: req.body.cpf,
        contact: req.body.contact,
        emergencyContact: req.body.emergencyContact,
        allergyList: req.body.allergyList,
        specialCares: req.body.specialCares,
        insurance: req.body.insurance,
        status: req.body.status,
        servicesCount: req.body.servicesCount
    }

    const patientExists = await Patient.findOne({
        where: {cpf: req.body.cpf}
    })

    if(patientExists){
        return res.status(409).json({message: "O paciente já está registrado no sistema"})
    }

    const patient = await Patient.create(data);

    res.status(201).json(patient);

}

module.exports = createPatient;