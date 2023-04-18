const Patient = require('../../models/patient')

async function findPatientById(req,res){

try {
    
    const patient = await Patient.findByPk(req.params.id)

    if(!patient){
        return res.status(404).json({message: 'Não existe paciente cadastrado com este ID'})
    }

    res.status(200).json(patient);

} catch (error) {
    res.status(500).json({message: 'Não conseguimos processar sua solicitação'})

}


}

module.exports = findPatientById;