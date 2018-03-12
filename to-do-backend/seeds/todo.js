
exports.seed = function (knex, Promise) {
  return knex('users').del() // delete existing entries
    .then(function () { // then seed the following
      return Promise.all([
        knex('todo').insert({ title: 'title1', text: 'test 1' }),
        knex('todo').insert({ title: 'title2', text: 'test 1' }),
        knex('todo').insert({ email: 'title3', text: 'test 1' })
      ]);
    });
};

// NOTE this seek has function that DELETES everything in the table before seeding, edit this if you want it to be an add only

