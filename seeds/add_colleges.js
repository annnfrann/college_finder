
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('colleges').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('colleges').insert({id: 1, college_name: 'Adrian College', city: 'Adrian', state: 'Michigan', website: 'http://adrian.edu', athletics_website: 'http://adrianbulldogs.com', enrollment: 1670, selectivity: 'competetive', sports_id: 3}),

        knex('colleges').insert({id: 2, college_name: 'Agnes Scott College', city: 'Decatur', state: 'Georgia', website: 'https://agnesscott.edu', athletics_website: 'http://athletics.agnesscott.edu', enrollment: 900, selectivity: 'more competetive', sports_id: 2}),

        knex('colleges').insert({id: 3, college_name: 'Albertus Magnus', city: 'New Haven', state: 'Connecticut', website: 'http://albertus.edu', athletics_website: 'http://albertusfalcons.com', enrollment: 500, selectivity: 'less competetive', sports_id: 1})
      ]);
    });
};
