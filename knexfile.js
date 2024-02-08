// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    client: 'postgresql',
    connection: {
      host : '127.0.0.1',
      port : 5433,
      database: 'tasks',
      user: 'postgres',
      password: 'C@nt0930511'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};
