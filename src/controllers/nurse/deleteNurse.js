const Nurse = require('../../models/nurse');

async function deleteNurse(req, res){

try {
    
    const deleteNurseInDatabase = await Nurse.findByPk(req.params.id)

    if(!deleteNurseInDatabase){
        return res.status(404).json({message: "ID não encontrado"})
    }

    await deleteNurseInDatabase.destroy();

    return res.status(204).json();

} catch (error) {

    console.log(error)
    res.status(500).json({message: 'Não conseguimos processar sua solicitação'})
    
}

}

module.exports = deleteNurse;