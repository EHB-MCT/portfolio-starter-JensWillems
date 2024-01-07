// knexfile.js
module.exports = {
    development: {
      client: 'mysql2',
      connection: {
        host: 'localhost',
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

  