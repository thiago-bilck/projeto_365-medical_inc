const yup = require('yup');
const Patient = require('../../models/patient')

const validation = yup.object().shape({
    fullName: yup.string("A informação deve ser um texto"),
    gender: yup.string().oneOf(["MASCULINO", "FEMININO", "OUTRO", "PREFIRO_NÃO_INFORMAR"]),//maneira de validar enum. Fica como aprendizado
    birthDate: yup.date("Informe uma data válida no formato aaaa-mm-dd."),
    cpf: yup.string(),
    contact: yup.string("A informação deve ser um texto"),
    emergencyContact: yup.string("A informação deve ser um texto"),
    allergyList: yup.string("A informação deve ser um texto"),
    specialCares: yup.string("A informação deve ser um texto"),
    insurance: yup.string("A informação deve ser um texto")    
    
})

async function validateUpdatePatient(req,res,next){
    console.log("Original data:", req.body);

    try {
        
        validation.validateSync(req.body)
        next();

    } catch (error) {
        res
        .status(400)
        .json({message: error.message})
    }

}

module.exports = validateUpdatePatient;