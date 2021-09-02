exports.up = (knex) => {
    return knex.schema.createTable("movies", (table) => {
      table.increments("movie_id").primary();
      table.string("title");
      table.integer("runtime_in_minutes");
      table.string("rating");
      table.text("description");
      table.string("image_url");
    });
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTable("movies");
  };