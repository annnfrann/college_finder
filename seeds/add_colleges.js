
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('colleges').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('colleges').insert({id: 1, college_name: 'Adrian College', city: 'Adrian', state: 'Michigan', website: 'http://adrian.edu', athletics_website: 'http://adrianbulldogs.com', enrollment: 1670, selectivity: 'competetive'}),

        knex('colleges').insert({id: 2, college_name: 'Agnes Scott College', city: 'Decatur', state: 'Georgia', website: 'https://agnesscott.edu', athletics_website: 'http://athletics.agnesscott.edu', enrollment: 900, selectivity: 'more competetive'}),

        knex('colleges').insert({id: 3, college_name: 'Albertus Magnus', city: 'New Haven', state: 'Connecticut', website: 'http://albertus.edu', athletics_website: 'http://albertusfalcons.com', enrollment: 500, selectivity: 'less competetive'}),

        knex('colleges').insert({id: 4, college_name: 'Denison University', city: 'Granville', state: 'Ohio', website: 'http://denison.edu', athletics_website: 'http://denisonbigred.com', enrollment: 2280, selectivity: 'more competetive'}),

        knex('colleges').insert({id: 5, college_name: 'Hendrix College', city: 'Conway', state: 'Arkansas', website: 'https://hendrix.edu', athletics_website: 'http://hendrixwarriors.com', enrollment: 1348, selectivity: 'more competetive'}),

        knex('colleges').insert({id: 6, college_name: 'Lake Forest College', city: 'Lake Forest', state: 'Illinois', website: 'https://lakeforest.edu', athletics_website: 'http://goforesters.com', enrollment: 1607, selectivity: 'more competetive'}),

        knex('colleges').insert({id: 7, college_name: 'Wartburg College', city: 'Waverly', state: 'Iowa', website: 'http://wartburg.edu', athletics_website: 'http://go-knights.net', enrollment: 1661, selectivity: 'more competetive'})
      ]);
    });
};
