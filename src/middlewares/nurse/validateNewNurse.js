const yup = require('yup');
const Nurse = require('../../models/nurse');

const validation = yup.object().shape({

    fullName: yup
    .string("A informação deve ser um texto"),
    gender: yup.string().oneOf(["MASCULINO", "FEMININO", "OUTRO", "PREFIRO_NÃO_INFORMAR"]),
    birthDate: yup
    .date("Informe uma data válida")
    .required("A data de nascimento é obrigatória"),
    cpf: yup
    .string()
    .required("CPF é obrigatório."),
    contact: yup.string("A informação deve ser um texto"),
    gradInstitution: yup
    .string("A informação deve ser um texto")
    .required("É necessário informar a instituição de graduação do enfermeiro"),
    cofenUf: yup
    .string()
    .required('É necessário informar o COFEN/UF do enfermeiro'),
    
})

async function validateNewNurse(req,res,next){

    console.log("Original data: ", req.body)

try {
    
validation.validateSync(req.body)
const nurseInDatabase = await Nurse.findOne({
    where: {cpf: req.body.cpf}
})

if(nurseInDatabase){
    return res.status(409).json({message: "Este CPF já está cadastrado no sistema"})
}

next();

} catch (error) {
    res.status(400).json({message: error.message})
    
}

}

module.exports = validateNewNurse;