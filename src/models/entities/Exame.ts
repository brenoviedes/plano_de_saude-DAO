import { Entity } from './Entity'

export class Exame extends Entity {
  especialidade: string
  profissionalResponsavel: string
  dataHorario: Date
  idBeneficiario: number
  caraterUrgencia: boolean

  constructor(especialidade: string, profissionalResponsavel: string, dataHorario: Date, idBeneficiario: number, caraterUrgencia: boolean) {
    super()
    this.especialidade = especialidade
    this.profissionalResponsavel = profissionalResponsavel
    this.dataHorario = dataHorario
    this.idBeneficiario = idBeneficiario
    this.caraterUrgencia = caraterUrgencia 
  }
}
