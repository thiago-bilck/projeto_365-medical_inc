const Doctor = require('../../models/doctor');

async function updateDoctorStatus(req,res){

console.log(req.params.id);
console.log(req.body.status);

try {
    
    const doctorStatusInDatabase = await Doctor.findByPk(req.params.id);

    if(!doctorStatusInDatabase){
        return res.status(404).json({message: "ID não encontrado"})

    }

    if(!["ATIVO", "INATIVO"].includes(req.body.status)){
        return res.status(400).json({message: "Apenas os status a seguir são aceitos: ATIVO, INATIVO"})
    }

    doctorStatusInDatabase.status = req.body.status;

    await doctorStatusInDatabase.save();
    res.json(doctorStatusInDatabase)


} catch (error) {
    
    console.log(error)
    res.status(500).json({message: "Infelizmente algum erro aconteceu"})

}

}

module.exports = updateDoctorStatus;