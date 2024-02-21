const config = {
  client: 'pg',
  connection: {
    database: 'crud2',
    host: 'localhost',
    user: '',
    password: '',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: './src/db/migrations',
    tableName: 'knex_migrations',
  },
  seeds: {
    directory: './src/db/seeds',
  },
};

export default config;
