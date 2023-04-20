const Nurse = require('../../models/nurse');

async function updateNurseData(req,res){

    console.log(req.params.id);
    console.log(req.body);

    try {
        
        const nurseInDatabase = await Nurse.findByPk(req.params.id);

        if(!nurseInDatabase){

            return res.status(404).json({message: "Não existe enfermeiro com o ID informado"})

        }

        nurseInDatabase.fullName = req.body.fullName || nurseInDatabase.fullName
        nurseInDatabase.gender= req.body.gender || nurseInDatabase.gender
        nurseInDatabase.birthDate= req.body.birthDate || nurseInDatabase.birthDate
        nurseInDatabase.cpf= req.body.cpf || nurseInDatabase.cpf
        nurseInDatabase.contact= req.body.contact || nurseInDatabase.contact
        nurseInDatabase.gradInstitution= req.body.gradInstitution || nurseInDatabase.gradInstitution
        nurseInDatabase.crmUf= req.body.crmUf || nurseInDatabase.crmUf
        nurseInDatabase.specialization= req.body.specialization || nurseInDatabase.specialization
        
        await nurseInDatabase.save();

        res.json(nurseInDatabase);

    } catch (error) {
        
        console.log(error)
        res.status(500).json({message: "Infelizmente algum erro aconteceu"})

    }
}

module.exports = updateNurseData;