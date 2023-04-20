const Nurse = require('../../models/nurse');

async function createNurse(req,res){
   
    try {
        const data = {
            fullName: req.body.fullName,
            gender: req.body.gender,
            birthDate: req.body.birthDate,
            cpf: req.body.cpf,
            contact: req.body.contact,
            gradInstitution: req.body.gradInstitution,
            cofenUf: req.body.cofenUf
        }
    
        const nurseExists = await Nurse.findOne({
            where: {cpf: req.body.cpf}
        })
    
        if(nurseExists){
            return res.status(409).json({message: 'O enfermeiro já está registrado no sistema '})
        }
    
        const nurse = await Nurse.create(data);
    
        res.status(201).json(nurse);
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
   
}


module.exports = createNurse;