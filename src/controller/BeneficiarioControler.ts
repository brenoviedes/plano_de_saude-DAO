import { GenericDAO } from "../models/dao/GenericDAO"
import { Beneficiario } from "../models/entities/Beneficiario"

const BeneficiarioSalvarController = async (nome: string, endereco: string, dataNascimento: Date, email: string, telefone: string) => {
  const newBeneficiario = new Beneficiario(nome, endereco, dataNascimento, email, telefone)
  const dao = new GenericDAO(Beneficiario)
  const savedBeneficiario = await dao.save(newBeneficiario)
  console.log(savedBeneficiario)
}

export default BeneficiarioSalvarController

export const BeneficiarioFindIDController = async (id: number) => {
  const dao = new GenericDAO(Beneficiario)
  const findBeneficiario = await dao.findID(id)
  console.log(findBeneficiario)
}