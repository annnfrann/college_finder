
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sports').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('sports').insert({id: 1, name: 'baseball', gender: 'male', division: 3}),

        knex('sports').insert({id: 2, name: 'field hockey', gender: 'female', division: 3}),

        knex('sports').insert({id: 3, name: 'football', gender: 'male', division: 3}),

        knex('sports').insert({id: 4, name: 'basketball', gender: 'male', division: 3}),

        knex('sports').insert({id: 5, name: 'cross country', gender: 'male', division: 3}),

        knex('sports').insert({id: 6, name: 'fencing', gender: 'male', division: 3}),

        knex('sports').insert({id: 7, name: 'golf', gender: 'male', division: 3}),

        knex('sports').insert({id: 8, name: 'gymnastics', gender: 'male', division: 3}),

        knex('sports').insert({id: 9, name: 'ice hockey', gender: 'male', division: 3}),

        knex('sports').insert({id: 10, name: 'lacrosse', gender: 'male', division: 3}),

        knex('sports').insert({id: 11, name: 'rifle', gender: 'male', division: 3}),

        knex('sports').insert({id: 12, name: 'skiing', gender: 'male', division: 'multiple'}),

        knex('sports').insert({id: 13, name: 'soccer', gender: 'male', division: 3}),

        knex('sports').insert({id: 14, name: 'swimming and diving', gender: 'male', division: 3}),

        knex('sports').insert({id: 15, name: 'tennis', gender: 'male', division: 3}),

        knex('sports').insert({id: 16, name: 'track and field', gender: 'male', division: 3}),

        knex('sports').insert({id: 17, name: 'volleyball', gender: 'male', division: 3}),

        knex('sports').insert({id: 18, name: 'water polo', gender: 'male', division: 3}),

        knex('sports').insert({id: 19, name: 'wrestling', gender: 'male', division: 3}),

        knex('sports').insert({id: 20, name: 'softball', gender: 'female', division: 3}),

        knex('sports').insert({id: 21, name: 'basketball', gender: 'female', division: 3}),

        knex('sports').insert({id: 22, name: 'beach volleyball', gender: 'female', division: 3}),

        knex('sports').insert({id: 23, name: 'bowling', gender: 'female', division: 3}),

        knex('sports').insert({id: 24, name: 'cross country', gender: 'female', division: 3}),

        knex('sports').insert({id: 25, name: 'equestrian', gender: 'female', division: 3}),

        knex('sports').insert({id: 26, name: 'fencing', gender: 'female', division: 3}),

        knex('sports').insert({id: 27, name: 'golf', gender: 'female', division: 3}),

        knex('sports').insert({id: 28, name: 'gymnastics', gender: 'female', division: 3}),

        knex('sports').insert({id: 29, name: 'ice hockey', gender: 'female', division: 3}),

        knex('sports').insert({id: 30, name: 'lacrosse', gender: 'female', division: 3}),

        knex('sports').insert({id: 31, name: 'rifle', gender: 'female', division: 3}),

        knex('sports').insert({id: 32, name: 'rowing', gender: 'female', division: 3}),

        knex('sports').insert({id: 33, name: 'rugby', gender: 'female', division: 3}),

        knex('sports').insert({id: 34, name: 'skiing', gender: 'female', division: "multiple"}),

        knex('sports').insert({id: 35, name: 'soccer', gender: 'female', division: 3}),

        knex('sports').insert({id: 36, name: 'swimming and diving', gender: 'female', division: 3}),

        knex('sports').insert({id: 37, name: 'tennis', gender: 'female', division: 3}),

        knex('sports').insert({id: 38, name: 'track and field', gender: 'female', division: 3}),

        knex('sports').insert({id: 39, name: 'triathlon', gender: 'female', division: 3}),

        knex('sports').insert({id: 40, name: 'volleyball', gender: 'female', division: 3}),

        knex('sports').insert({id: 41, name: 'water polo', gender: 'female', division: 3})
      ]);
    });
};
