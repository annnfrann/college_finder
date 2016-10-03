
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sports').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('sports').insert({id: 1, name: 'basketball', gender: 'male', division: 3, colleges_id: 3}),

        knex('sports').insert({id: 2, name: 'softball', gender: 'female', division: 3, colleges_id: 2}),

        knex('sports').insert({id: 3, name: 'baseball', gender: 'male', division: 3, colleges_id: 1})
      ]);
    });
};
