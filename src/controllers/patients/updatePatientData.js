const Patient = require('../../models/patient');


async function updatePatientData (req,res){

console.log(req.params.id);
console.log(req.body);

try {
    const patientInDatabase = await Patient.findByPk(req.params.id);

    if(!patientInDatabase){

        return res.status(404).json({message: 'Não existe paciente com o ID informado'});
    }

    patientInDatabase.fullName = req.body.fullName || patientInDatabase.fullName
    patientInDatabase.gender = req.body.gender || patientInDatabase.gender
    patientInDatabase.birthDate = req.body.birthDate || patientInDatabase.birthDate
    patientInDatabase.cpf = req.body.cpf || patientInDatabase.cpf
    patientInDatabase.contact = req.body.contact || patientInDatabase.contact
    patientInDatabase.emergencyContact = req.body.emergencyContact || patientInDatabase.emergencyContact
    patientInDatabase.allergyList = req.body.allergyList || patientInDatabase.allergyList
    patientInDatabase.specialCares= req.body.specialCares || patientInDatabase.specialCares
    patientInDatabase.insurance = req.body.insurance || patientInDatabase.insurance

    await patientInDatabase.save();

    res.json(patientInDatabase);
        
} catch (error) {
    console.log(error)
    res.status(500).json({message: "Infelizmente algum erro aconteceu"})

}


}

module.exports = updatePatientData;