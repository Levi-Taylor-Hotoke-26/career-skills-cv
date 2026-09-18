export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './db/development.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};