const Nurse = require('../../models/nurse');

async function findNurseById(req,res){

    try {
        
    const nurse = await Nurse.findByPk(req.params.id);
    
    if(!nurse){
        return res.status(404).json({message: 'Não existe enfermeiro cadastrado com este ID'})
    
    }
    
    res.status(200).json(nurse);
    
    } catch (error) {
        res.status(500).json({message: 'Não conseguimos processar sua solicitação'})
    
    }
    
    }
    
    module.exports = findNurseById;