// 20240106191557_add_foreign_key_to_spells.js
exports.up = function (knex) {
    return knex.schema.alterTable("spells", function (table) {
      table
        .foreign("school_of_magic", "spells_school_of_magic_foreign_updated")
        .references("school_name")
        .inTable("schools_of_magic")
        .onDelete("SET NULL");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.alterTable("spells", function (table) {
      table.dropForeign("school_of_magic", "spells_school_of_magic_foreign_updated");
    });
  };
  