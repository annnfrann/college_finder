var knex = require('../db/knex')

module.exports = {
  all: function(){
    return knex.raw('SELECT * FROM colleges')
  },
  names: function(){
    return knex.raw('SELECT college_name FROM colleges')
  },
  city: function(){
    return knex.raw('SELECT city FROM colleges')
  },
  states: function(){
    return knex.raw('SELECT state FROM colleges')
  },
  enrollment: function(){
    return knex.raw('SELECT enrollment FROM colleges')
  },
  admissions: function(){
    return knex.raw('SELECT selectivity FROM colleges')
  },
  sportsInSchool: function(){
    return knex.raw('SELECT sports_id FROM colleges')
  },
  mensSports: function(){
    return knex('sports').where('gender', 'male').pluck('name')
  },
  womensSports: function(){
    return knex('sports').where('gender', 'female').pluck('name')
  },
  division: function(){
    return knex.raw('SELECT division from sports')
  },
  testBig: function(input1, input2, input3){
    return knex('colleges').where({
      city: input1,
      sports_id: input2,
      enrollment: input3
    }).select('college_name')
  },
  getSports: function(selectedGender){
    return knex('sports').where('gender', selectedGender).pluck('name')
  },
  getDivision: function(selectedGender, sportName){
    return knex.select('division', 'id').from('sports').where({
      gender: selectedGender,
      name: sportName
    })
  },
  getEnrollment: function(selectedSportId){
    return knex('college_sports').where('sport_id', selectedSportId).pluck('college_id').then(function (college_ids) {
      return knex('colleges').whereIn('id', college_ids).pluck('enrollment');
    })
  },
  getSelectivity: function(val1, val2, selectedSportId){
    return knex('college_sports').where('sport_id', selectedSportId).pluck('college_id').then(function(college_ids){
      return knex('colleges').whereBetween('enrollment', [val1, val2]).whereIn('id', college_ids).pluck('selectivity')
    })
    // gets schools where sports id and 'enrollment' between selected values and outputs their locations
  },
  getLocation: function(val1, val2, selectedSportId, selectedSelectivity){
    return knex('college_sports').where('sport_id', selectedSportId).pluck('college_id').then(function(college_ids){
      return knex('colleges').whereBetween('enrollment', [val1, val2]).whereIn('id', college_ids).andWhere({
        selectivity: selectedSelectivity
      }).pluck('state')
    })
    // gets school where sports id and 'enrollment' between selected values and locations
  },
  getResults: function(val1, val2, selectedSportId, selectedSelectivity, selectedState){
    return knex('college_sports').where('sport_id', selectedSportId).pluck('college_id').then(function(college_ids){
      return knex('colleges').whereBetween('enrollment', [val1, val2]).whereIn('id', college_ids).andWhere({
        selectivity: selectedSelectivity,
        state: selectedState
      })
    })
  }
}
// findOne: function (id) {
//   return knex.raw(`SELECT * FROM books WHERE id=${id}`);
// }
