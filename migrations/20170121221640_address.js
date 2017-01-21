exports.up = function(knex, Promise) {
  return knex.schema.createTable('address',(table)=>{
    table.increments();
    table.string('address').notNullable()
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id')
    table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('address')
};
