// migrations\20231115130237_add_classes_table.js

exports.up = function (knex) {
  return knex.schema
    .createTable("classes", function (table) {
      table.increments("id").primary();
      table.string("class").unique();
      table.uuid("uuid");
      table.float("average_grade");
      table.string("classroom");
    })
    .then(() => {
      return knex.schema.alterTable("students", function (table) {
        table
          .foreign("classgroup", "students_classgroup_foreign")
          .references("class")
          .inTable("classes")
          .onDelete("SET NULL");
      });
    });
};

exports.down = function (knex) {
  return knex.schema
    .alterTable("students", function (table) {
      table.dropForeign("classgroup", "students_classgroup_foreign");
    })
    .then(() => {
      return knex.schema.dropTable("classes");
    });
    
};
  