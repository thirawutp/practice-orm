// Update with your config settings.

module.exports = {
  development: {
    client: 'mariasql',
    connection: {
      db: 'test',
      host: 'db.thirawut.com',
      user:     'thirawut',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
