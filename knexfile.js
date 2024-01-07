// knexfile.js

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'host.docker.internal',
      user: 'root',
      password: '',
      database: 'd&d spell list',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};