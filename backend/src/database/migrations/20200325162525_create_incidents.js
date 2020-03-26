
exports.up = function(knex) {
    return knex.schema.createTable("incidentes", function(table){
        table.increments();
        table.string("title").noNullable;
        table.string("description").noNullable;
        table.decimal("value").noNullable;
        table.string("ong_id").noNullable;
        table.foreign("ong_id").references("id").inTable("ongs");
  
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable("incidentes");
};
