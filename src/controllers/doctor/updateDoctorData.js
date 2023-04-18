const Doctor = require('../../models/doctor');

async function updateDoctorData(req,res){

    console.log(req.params.id);
    console.log(req.body);

    try {
        
        const doctorInDatabase = await Doctor.findByPk(req.params.id);

        if(!doctorInDatabase){

            return res.status(404).json({message: "Não existe médico com o ID informado"})

        }

        doctorInDatabase.fullName = req.body.fullName || doctorInDatabase.fullName
        doctorInDatabase.gender= req.body.gender || doctorInDatabase.gender
        doctorInDatabase.birthDate= req.body.birthDate || doctorInDatabase.birthDate
        doctorInDatabase.cpf= req.body.cpf || doctorInDatabase.cpf
        doctorInDatabase.contact= req.body.contact || doctorInDatabase.contact
        doctorInDatabase.gradInstitution= req.body.gradInstitution || doctorInDatabase.gradInstitution
        doctorInDatabase.crmUf= req.body.crmUf || doctorInDatabase.crmUf
        doctorInDatabase.specialization= req.body.specialization || doctorInDatabase.specialization
        
        await doctorInDatabase.save();

        res.json(doctorInDatabase);

    } catch (error) {
        
        console.log(error)
        res.status(500).json({message: "Infelizmente algum erro aconteceu"})

    }
}

module.exports = updateDoctorData;