//
// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('users').del()
//     .then(function () {
//       return Promise.all([
//         // Inserts seed entries
//         knex('users').insert({id: 1, full_name: 'anna lewis', email: 'anna@anna.com', hashed_password: 'cool', is_admin: true}),
//         knex('users').insert({id: 2, full_name: 'brett lastname', email: 'brett@brett.com', hashed_password: 'password', is_admin: true}),
//         knex('users').insert({id: 3, full_name: 'zach lastname', email: 'zach@zach.com', hashed_password: '1234', is_admin: false})
//       ]);
//     });
// };
