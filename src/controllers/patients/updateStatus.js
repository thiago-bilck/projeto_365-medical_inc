const Patient = require('../../models/patient');

async function updateStatus(req,res) {
console.log(req.params.id);
console.log(req.body.status);

try {
    const patientStatusInDatabase = await Patient.findByPk(req.params.id);
    
    if(!patientStatusInDatabase){
        return res
        .status(404)
        .json({message: 'ID não encontrado'});
    }

    //outra forma de validação para status. Sem usar middleware.
    /* if(patientStatusInDatabase.status!== "ATENDIDO" || patientStatusInDatabase.status!== "EM_ATENDIMENTO" || patientStatusInDatabase.status!== "AGUARDANDO_ATENDIMENTO" || patientStatusInDatabase.status!== "NÃO_ATENDIDO"){
        return res.status(400).json({message: 'Apenas os status a seguir são aceitos: "AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO","NÃO_ATENDIDO"'})
    } */

    if(!["AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO","NÃO_ATENDIDO"].includes(req.body.status)){
        return res.status(400).json({message: 'Apenas os status a seguir são aceitos: "AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO","NÃO_ATENDIDO"'})

    }

    patientStatusInDatabase.status = req.body.status

    await patientStatusInDatabase.save();
    res.json(patientStatusInDatabase);
    
} catch (error) {
    console.log(error)
    res.status(500).json({message: "Infelizmente algum erro aconteceu"})
}


}

module.exports = updateStatus;