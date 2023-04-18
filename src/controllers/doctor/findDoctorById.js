const Doctor = require('../../models/doctor');

async function findDoctorById(req,res){

try {
    
const doctor = await Doctor.findByPk(req.params.id);

if(!doctor){
    return res.status(404).json({message: 'Não existe médico cadastrado com este ID'})

}

res.status(200).json(doctor);

} catch (error) {
    res.status(500).json({message: 'Não conseguimos processar sua solicitação'})

}

}

module.exports = findDoctorById;