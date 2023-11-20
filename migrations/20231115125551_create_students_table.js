//migrations\20231115125551_create_students_table.js

exports.up = function (knex) {
    return knex.schema.createTable('students', function (table) {
      table.increments('id').primary();
      table.uuid('UUID');
      table.string('name');
      table.integer('age');
      table.string('classgroup');
      table.double('grade');
      table.timestamps(true, true);
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('students');
  };