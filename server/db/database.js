import knex from 'knex'
import config from '../knexfile.js'

const environment = process.env.NODE_ENV || 'development'

const dbConfig = environment === 'production'
  ? {
    client: 'sqlite3',
    connection: {
      filename: './production.sqlite3'
    },
    useNullAsDefault: true,
    migrations: { directory: './db/migrations' },
    seeds: { directory: './db/seeds' }
  }
  : config[environment]

const db = knex(dbConfig)

export default db