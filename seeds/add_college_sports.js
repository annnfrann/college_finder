
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('college_sports').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('college_sports').insert({id: 1, college_id: 1, sport_id: 21}),

        knex('college_sports').insert({id: 2, college_id: 2, sport_id: 21}),

        knex('college_sports').insert({id: 3, college_id: 3, sport_id: 21}),

        knex('college_sports').insert({id: 4, college_id: 4, sport_id: 21}),

        knex('college_sports').insert({id: 5, college_id: 5, sport_id: 21}),

        knex('college_sports').insert({id: 6, college_id: 6, sport_id: 21}),

        knex('college_sports').insert({id: 7, college_id: 7, sport_id: 21})
      ]);
    });
};
