import { GenericDAO } from "../models/dao/GenericDAO"
import { Consulta } from "../models/entities/Consulta"

const ConsultaSalvarController = async (especialidade: string, nomeMedico: string, dataHorario: Date, idBeneficiario: number) => {

  especialidade = especialidade.toLocaleLowerCase()
  
  if (especialidade != 'oncologia' && especialidade != 'obstetrícia' && especialidade != 'oftalmologia' && especialidade != 'odontologia') {
    
    console.log('consulta não cadastrada')
    return null
  }

  const newConsulta = new Consulta(especialidade, nomeMedico, dataHorario, idBeneficiario)
  const dao1 = new GenericDAO(Consulta)
  const savedConsulta = await dao1.save(newConsulta)
  console.log(savedConsulta)
}

export default ConsultaSalvarController

export const ConsultaFindIDController = async (id: number) => {
  const dao = new GenericDAO(Consulta)
  const findBeneficiario = await dao.findID(id)
  console.log(findBeneficiario)
}