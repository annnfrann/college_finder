exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('colleges', function(table){
      table.increments();
      table.string('college_name');
      table.string('city');
      table.string('state');
      table.string('website');
      table.string('athletics_website');
      table.integer('enrollment');
      table.string('selectivity');
      table.integer('sports_id');
    }),
    knex.schema.createTable('sports', function(table){
      table.increments();
      table.string('name');
      table.string('gender');
      table.string('division');
      table.integer('colleges_id');
    }),
    knex.schema.createTable('college_sports', function(table){
      table.increments();
      table.integer('colleges_id');
      table.integer('sports_id');
    }),
    knex.schema.createTable('users', function(table){
      table.increments();
      table.string('full_name');
      table.string('email');
      table.string('hashed_password');
      table.boolean('is_admin');
    })
  ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('colleges'),
        knex.schema.dropTable('sports'),
        knex.schema.dropTable('college_sports'),
        knex.schema.dropTable('users')
    ])
};
