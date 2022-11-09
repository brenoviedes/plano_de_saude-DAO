import { createTables } from './config/db'
import BeneficiarioSalvarController, { BeneficiarioFindIDController } from './controller/BeneficiarioControler'
import ConsultaSalvarController, { ConsultaFindIDController } from './controller/ConsultaController'
import ExameSalvarController, { ExameFindIDController } from './controller/ExameController'

const run = async () => {
  await createTables()

  console.log('-------Salvar dados--------')

  await BeneficiarioSalvarController('Dagoberto', 'rua x, 1500', new Date(1987, 4, 21), 'daguinho123@gmail.com', '4002-8922')

  await ConsultaSalvarController('oncologia', 'Sebastião', new Date(1987, 7, 21), 15)

  await ExameSalvarController('refração', 'Sebastião', new Date(2022, 12, 25), 15)

  console.log('-------Busca por ID--------')

  BeneficiarioFindIDController(4)

  ConsultaFindIDController(6)

  ExameFindIDController(6)
}

run()
