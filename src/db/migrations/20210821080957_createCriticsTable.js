exports.up = (knex) => {
  return knex.schema.createTable("critics", (table) => {
    table.increments("critic_id").primary();
    table.string("preferred_name");
    table.string("surname");
    table.string("organization_name");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("critics");
};
