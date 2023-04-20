const Nurse = require('../../models/nurse');

async function findAllNurses(req, res){

    try {
        
            const nurse = await Nurse.findAll();

            res.status(200).json(nurse);
        }

    catch (error) {
        return res.status(500).json({message: 'Não foi possível concluir sua solicitação'});

    }

}

module.exports = findAllNurses;