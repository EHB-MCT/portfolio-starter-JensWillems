// 20240102022554_schools_of_magic.js
exports.up = function (knex) {
  return knex.schema
    .createTable("schools_of_magic", function (table) {
      table.increments("id").primary();
      table.string("school_name").unique();
      table.uuid("uuid");
      // Add any other relevant columns for schools_of_magic
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("schools_of_magic");
};
