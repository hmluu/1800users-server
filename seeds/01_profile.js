
exports.seed = function(knex) {
  return knex.raw('ALTER SEQUENCE profile_id_seq RESTART with 4')
    .then(() => {
    return knex('profile').del()
      .then(function () {
        return knex('profile').insert([
          { 
            id: 1,
            first: "John",
            last: "Roberts",
            date_of_birth: "1967-10-01",
            current_location: "Chicago, IL",
            description: "John is a retired YouTuber"},
          {
            id: 2,
            first: "Frita",
            last: "Waters",
            date_of_birth: "1991-10-01",
            current_location: "Phoenix, AZ",
            description: "Frita loves the desert, cheese, and turtles."},
          { 
            id: 3,
            first: "Bart",
            last: "Simpson",
            date_of_birth: "1994-10-01",
            current_location: "Springfield, IL",
            description: "Bart skateboards everywhere."
          }
        ]);
      });
    });
  };
