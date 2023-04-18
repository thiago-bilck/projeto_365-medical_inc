const Doctor = require('../../models/doctor');

async function createDoctor(req,res){

const data = {
    fullName: req.body.fullName,
    gender: req.body.gender,
    birthDate: req.body.birthDate,
    cpf: req.body.cpf,
    contact: req.body.contact,
    gradInstitution: req.body.gradInstitution,
    crmUf: req.body.crmUf,
    specialization: req.body.specialization,
    status: req.body.status,
    servicesCount: req.body.servicesCount
}

const doctorExists = await Doctor.findOne({
    where:{
        cpf: req.body.cpf
    }
})

if(doctorExists){
    return res.status(409).json({message: "Já existe um registro para este CPF"})
}

const doctor = await Doctor.create(data);

res.status(201).json(doctor);

}

module.exports = createDoctor;

