const Doctor = require('../../models/doctor');

async function findAllDoctors(req, res){

    try {
        
        const filter = req.query;

        if(filter.status){

            if(!["ATIVO", "INATIVO"].includes(filter.status)){
                return res.status(400).json({message: 'Informe um dos seguintes status válidos: ATIVO, INATIVO'})

            }

            const doctor = await Doctor.findAll({
                where: {
                    status:filter.status
                }
            });
            res.status(200).json(doctor);
        }

        else{
            const doctor = await Doctor.findAll();
            res.status(200).json(doctor);
        }

    } catch (error) {
        return res.status(500).json({message: 'Não foi possível concluir sua solicitação'});

    }

}

module.exports = findAllDoctors;