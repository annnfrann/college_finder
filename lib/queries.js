var knex = require('../db/knex')

module.exports = {

  all: function(){
    return knex.raw('SELECT * FROM colleges')
  },

  names: function(){
    return knex.raw('SELECT college_name FROM colleges')
  },

  states: function(){
    return knex.raw('SELECT state FROM colleges')
  },

  enrollment: function(){
    return knex.raw('SELECT enrollment FROM colleges')
  },

  sportsInSchool: function(){
    return knex.raw('SELECT sports_id FROM colleges')
  }

}
