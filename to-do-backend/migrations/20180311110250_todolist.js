
exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('todolist', function (table) {
    table.increments('id').primary(); // adds incrementing int for id
    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
    table.string('title').notNullable();
    table.string('task').notNullable();
    table.boolean('complete').notNullable();
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('todolist') // drop table when reverting
};