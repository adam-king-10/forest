
exports.up = function (knex) {
  return knex.schema.createTable('floras', table => {
    table.increments('id')
    table.string('name')
    table.string('images')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('floras')
}
