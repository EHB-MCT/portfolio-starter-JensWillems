// 20240102022906_add_spells.js
exports.up = function (knex) {
  return knex.schema
    .createTable("spells", function (table) {
      table.increments("id").primary();
      table.string("spell_name").unique();
      table.uuid("uuid");
      table.string("school_of_magic"); 
      table.integer("spell_level");
      table.string("components");
      table
        .foreign("school_of_magic", "spells_school_of_magic_foreign")
        .references("school_name")
        .inTable("schools_of_magic")
        .onDelete("SET NULL");
     
    });
};

exports.down = function (knex) {
  return knex.schema
    .alterTable("spells", function (table) {
      table.dropForeign("school_of_magic", "spells_school_of_magic_foreign");
    })
    .then(() => {
      return knex.schema.dropTable("spells");
    });
};
