// Update with your config settings.

module.exports = {
  developement: {
    client: 'postgresql',
    connection: {
      database: 'sailing',
      user:     'sailing',
      password: 'sailing'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
};
