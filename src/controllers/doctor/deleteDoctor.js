const Doctor = require('../../models/doctor');

async function deleteDoctor(req, res){

try {
    
    const deleteDoctorInDatabase = await Doctor.findByPk(req.params.id)

    if(!deleteDoctorInDatabase){
        return res.status(404).json({message: "ID não encontrado"})
    }

    await deleteDoctorInDatabase.destroy();

    return res.status(204).json();

} catch (error) {

    console.log(error)
    res.status(500).json({message: 'Não conseguimos processar sua solicitação'})
    
}

}

module.exports = deleteDoctor;