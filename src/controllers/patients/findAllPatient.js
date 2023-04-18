const Pacient = require('../../models/patient');


async function findAllPatient (req, res){

try {
    //este código é para filtrar dados via querys, caso desejado

    const filter = req.query;//aqui está sendo o criada a variável que vai filtrar os dados via query
    
    if(filter.status){

    if(!["AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO","NÃO_ATENDIDO"].includes(filter.status)){
        return res.json({message: 'Informe um dos seguintes status válidos: "AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO","NÃO_ATENDIDO"'})
    }

    const patient = await Pacient.findAll({
        where:{
            status: filter.status
        }
    });
    res.status(200).json(patient);
}
    else{

        const patient = await Pacient.findAll();
        res.status(200).json(patient);

    }

} catch (error) {
    return res.status(500).json({message: 'Não foi possível concluir sua solicitação'});
}


}

module.exports = findAllPatient;