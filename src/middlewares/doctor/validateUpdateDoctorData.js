const yup = require('yup')
const Doctor = require('../../models/doctor')


const validation = yup.object().shape({

    fullName: yup.string("A informação deve ser um texto"),
    gender: yup.string().oneOf(["MASCULINO", "FEMININO", "OUTRO", "PREFIRO_NÃO_INFORMAR"]),//maneira de validar enum. Fica como aprendizado
    birthDate: yup
    .date(),
    cpf: yup.string(),
    contact: yup.string("A informação deve ser um texto"),
    gradInstitution: yup
    .string("A informação deve ser um texto"),
    crmUf: yup
    .string("A informação deve ser um texto"),
    specialization: yup
    .string("A informação deve ser um texto")
    .oneOf(['CLINICO_GERAL', 'ANESTESISTA', 'DERMATOLOGIA', 'GINECOLOGIA', 'NEUROLOGIA', 'PEDIATRIA', 'PSIQUIATRIA', 'ORTOPEDIA'])
})


async function validateUpdateDoctorData(req, res, next){

    console.log("Original data: ", req.body);

try {
    
    validation.validateSync(req.body);
    next();

} catch (error) {
    
    res
    .status(400)
    .json({message: error.message});

}

}

module.exports = validateUpdateDoctorData;