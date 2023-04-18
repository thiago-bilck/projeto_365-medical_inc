const yup = require('yup');
const Patient = require('../../models/patient')

const validation = yup.object().shape({
    fullName: yup
    .string("A informação deve ser um texto"),
    gender: yup.string().oneOf(["MASCULINO", "FEMININO", "OUTRO", "PREFIRO_NÃO_INFORMAR"]),//maneira de validar enum. Fica como aprendizado
    birthDate: yup
    .date("Informe uma data válida no formato: aaaa-mm-dd")
    .required("A data de nascimento é obrigatória"),
    cpf: yup
    .string()
    .required("CPF é obrigatório"),
    contact: yup.string("A informação deve ser um texto"),
    emergencyContact: yup
    .string("A informação deve ser um texto")
    .required("É necessário informar um contato de emergência"),
    allergyList: yup.string("A informação deve ser um texto"),
    specialCares: yup.string("A informação deve ser um texto"),
    insurance: yup.string("A informação deve ser um texto"),
    serviceStatus: yup.string().oneOf(["AGUARDANDO_ATENDIMENTO", "EM_ATENDIMENTO", "ATENDIDO","NÃO_ATENDIDO"]),
    servicesCount: yup.number().integer().default(0).nullable(true),  //função nullable para permitir campos null e passando de novo o default como 0
})

async function validateNewPatient(req,res,next){
    console.log("Original data:", req.body);

    try {
        
        validation.validateSync(req.body)
        //next()
    } catch (error) {
        res
        .status(400)
        .json({message: error.message})
    }


    try {
        const userInDatabase = await Patient.findOne({
            where: {
                cpf: req.body.cpf}
            })

        if (userInDatabase){
            return res
            .status(409)
            .json({message: "Este CPF já está cadastrado no sistema"})
        }


        next();
    } catch (error) {
        res
        .status(400)
        .json({message: error.message})
    }
}

module.exports = validateNewPatient;