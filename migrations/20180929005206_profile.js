
exports.up = function(knex) {
  return knex.schema.createTable('profile', (table) => {
    table.increments();
    table.text('first').notNullable();
    table.text('last').notNullable();
    table.date('date_of_birth').notNullable().unsigned();
    table.text('current_location').notNullable();
    table.text('description').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('profile')
};
