import { GenericDAO } from "../models/dao/GenericDAO"
import { Exame } from "../models/entities/Exame"

const ExameSalvarController = async (especialidade: string, profissionalResponsavel: string, dataHorario: Date, idBeneficiario: number, caraterUrgencia: boolean = false) => {

  especialidade = especialidade.toLocaleLowerCase()
  
  if (especialidade != 'biópsia' && especialidade != 'ultrassom' && especialidade != 'refração' && especialidade != 'radiografia oclusal') {
    console.log('exame não cadastrado')
    return null
  }

  const newExame = new Exame(especialidade, profissionalResponsavel, dataHorario, idBeneficiario, caraterUrgencia)
  const dao1 = new GenericDAO(Exame)
  const savedExame = await dao1.save(newExame)
  console.log(savedExame)
}

export default ExameSalvarController

export const ExameFindIDController = async (id: number) => {
  const dao = new GenericDAO(Exame)
  const findBeneficiario = await dao.findID(id)
  console.log(findBeneficiario)
}