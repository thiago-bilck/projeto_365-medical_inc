const Patient = require('../../models/patient');

async function deletePatient(req,res){

try {

    const id = req.params.id;
    const deletePatientInDatabase = await Patient.findByPk(id);

    if(!deletePatientInDatabase){
        return res.status(404).json({message: 'ID não encontrado'})
    }

    await deletePatientInDatabase.destroy();

    return res.status(204).json();

} catch (error) {
    console.log(error)
    res.status(500).json({message: 'Não conseguimos processar sua solicitação'})
}

}


module.exports = deletePatient;