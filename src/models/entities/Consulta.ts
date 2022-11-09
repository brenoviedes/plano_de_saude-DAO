import Dates from '../../controller/Dates'
import { Entity } from './Entity'


export class Consulta extends Entity {
  especialidade: string
  nomeMedico: string
  dataHorario: Date
  idBeneficiario: number

  constructor(especialidade: string, nomeMedico: string, dataHorario: Date, idBeneficiario: number) {
    super()
    this.especialidade = especialidade
    this.nomeMedico = nomeMedico
    this.dataHorario = dataHorario
    this.idBeneficiario = idBeneficiario 
  }
}
