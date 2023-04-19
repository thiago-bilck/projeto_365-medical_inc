const Patient = require('../../models/patient');
const Doctor = require('../../models/doctor');
const Service = require('../../models/service');
//confirmar também se tenho que importar  a classe serviço nos modelos de patient e doctor

async function createService(req,res){

    try {
        
        const data = {
            patientId: req.body.patientId,
            doctorId: req.body.doctorId
        }

        if(!data.patientId || !data.doctorId){
            return res.status(400).json({message: "Um dos Ids não confere. Por favor, tente novamente com um ID válido."})
        }

        const patienInDatabase = await Patient.findByPk(data.patientId)

        if(!patienInDatabase){
            return res.status(404).json({message: "ID do paciente não existe"})
        }

        //continuar os mesmos passos das linhas acima para o médico


        const service = await Service.create(data)

        res.json(service);

    } catch (error) {
        
        console.log(error);
        return res.status(500).json({message: "Não foi possível completar sua solicitação."})
    }
}

module.exports = createService;