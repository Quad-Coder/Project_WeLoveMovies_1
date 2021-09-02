exports.up = (knex) => {
  return knex.schema.createTable("movies_theaters", (table) => {
    table.integer("movie_id").notNullable();
    table
      .foreign("movie_id")
      .references("movie_id")
      .inTable("movies")
      .onDelete("CASCADE");

    table.integer("theater_id").notNullable();
    table
      .foreign("theater_id")
      .references("theater_id")
      .inTable("theaters")
      .onDelete("CASCADE");

    table.boolean("is_showing").defaultTo(false);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("movies_theaters");
};
