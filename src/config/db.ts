import * as dotenv from 'dotenv'
import { Pool } from 'pg'

// Primeiramente, carregue as variáveis de ambiente!
dotenv.config()

const sqlPool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'plano_de_saude',
  user: 'ifms',
  password: 'ifms',
})

export const createTables = async () => {
  const client = await sqlPool.connect()

  try {
    await client.query('BEGIN')

    // Faz tudo que tem que ser feito
    await client.query(`
        create table if not exists "beneficiario" (
          "id" serial primary key,
          "nome" varchar not null,
          "endereco" varchar not null,
          "dataNascimento" date not null,
          "email" varchar,
          "telefone" varchar not null
      )
    `)

    await client.query(`
        create table if not exists "consulta" (
          "id" serial primary key,
          "especialidade" varchar not null,
          "nomeMedico" varchar not null,
          "dataHorario" date not null,
          "idBeneficiario" integer not null references beneficiario(id)
      )      
    `)

    await client.query(`
        create table if not exists "exame" (
          "id" serial primary key,
          "especialidade" varchar not null,
          "profissionalResponsavel" varchar not null,
          "dataHorario" date not null,
          "idBeneficiario" integer not null references beneficiario(id),
          "caraterUrgencia" boolean 
      )      
    `)

    await client.query('COMMIT')
  } catch (err) {
    await client.query('ROLLBACK')
  }

  console.log('Feito')
  client.release()
}

export const executeQuery = async (query: string, values?: any[]) => {
  const result = values
    ? await sqlPool.query(query, values)
    : await sqlPool.query(query)

  return result
}

process.on('SIGINT', async () => {
  await sqlPool.end()
  console.log('Connection to db closed')
})
