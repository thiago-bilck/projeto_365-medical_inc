const yup = require('yup');
const Doctor = require('../../models/doctor');

const validation = yup.object().shape({

    fullName: yup
    .string("A informação deve ser um texto"),
    gender: yup.string().oneOf(["MASCULINO", "FEMININO", "OUTRO", "PREFIRO_NÃO_INFORMAR"]),
    birthDate: yup
    .date("Informe uma data válida")
    .required("A data de nascimento é obrigatória")
    .nullable(false),
    cpf: yup
    .string()
    .required("CPF é obrigatório."),
    contact: yup.string("A informação deve ser um texto"),
    gradInstitution: yup
    .string("A informação deve ser um texto")
    .required("É necessário informar a instituição de graduação do médico"),
    crmUf: yup
    .string()
    .required('É necessário informar o CRM do médico'),
    specialization: yup
    .string()
    .oneOf(['CLINICO_GERAL', 'ANESTESISTA', 'DERMATOLOGIA', 'GINECOLOGIA', 'NEUROLOGIA', 'PEDIATRIA', 'PSIQUIATRIA', 'ORTOPEDIA'])
    .required("Informe qual a especialização: 'CLINICO_GERAL', 'ANESTESISTA', 'DERMATOLOGIA', 'GINECOLOGIA', 'NEUROLOGIA', 'PEDIATRIA', 'PSIQUIATRIA', 'ORTOPEDIA'"),
    status: yup.string().oneOf(["ATIVO", "INATIVO"]).default("ATIVO"),
    servicesCount: yup.number().integer().default(0)
})

async function validateNewDoctor(req, res, next){
    console.log("Original data: ", req.body);

    try {
        
        validation.validateSync(req.body)
    } catch (error) {
        res
        .status(400)
        .json({message: error.message})
    }

    try {
        
        const doctorInDatabase = await Doctor.findOne({
            where:{cpf: req.body.cpf}
        })

            if(doctorInDatabase){

                return res
                .status(409)
                .json({message: "Este CPF já está cadastrado no sistema"})

            }


            next()
        }
     catch (error) {
        res
        .status(400)
        .json({message: error.message})
    }

}

module.exports = validateNewDoctor;