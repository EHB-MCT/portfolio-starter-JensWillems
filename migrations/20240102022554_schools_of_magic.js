// 20240102022554_schools_of_magic.js
exports.up = function (knex) {
    return knex.schema
      .createTable("schools_of_magic", function (table) {
        table.increments("id").primary();
        table.string("school_name").unique();
        table.uuid("uuid");
        // Add any other relevant columns for schools_of_magic
      })
      .then(() => {
        return knex.schema.alterTable("spells", function (table) {
          table
            .foreign("school_of_magic", "spells_school_of_magic_foreign")
            .references("school_name")
            .inTable("schools_of_magic")
            .onDelete("SET NULL");
        });
      });
  };
  
  exports.down = function (knex) {
    return knex.schema
      .alterTable("spells", function (table) {
        table.dropForeign("school_of_magic", "spells_school_of_magic_foreign");
      })
      .then(() => {
        return knex.schema.dropTable("schools_of_magic");
      });
  };
  